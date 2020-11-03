package com.programming.techie.youtube.service;

import com.programming.techie.youtube.dto.UploadVideoResponse;
import com.programming.techie.youtube.dto.VideoDto;
import com.programming.techie.youtube.exception.YoutubeCloneException;
import com.programming.techie.youtube.mapper.VideoMapper;
import com.programming.techie.youtube.model.Video;
import com.programming.techie.youtube.repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class VideoService {

    private final VideoRepository videoRepository;
    private final FileService fileSystemService;
    private final UserService userService;
    private final VideoMapper videoMapper;

    public UploadVideoResponse uploadVideo(MultipartFile file, String channelId) {
        String fileName = fileSystemService.upload(file);
        Video video = new Video();
        video.setFileName(fileName);
        Objects.requireNonNull(channelId);
        video.setChannelId(channelId);
        videoRepository.save(video);
        return new UploadVideoResponse(video.getId(), fileName);
    }

    public List<VideoDto> getAllVideos() {
        return videoRepository.findAll()
                .stream()
                .map(videoMapper::mapToDto)
                .collect(Collectors.toList());
    }

    public VideoDto getVideo(String id) {
        return videoMapper.mapToDto(getVideoById(id));
    }

    public List<VideoDto> getAllVideosByChannel(String channelId) {
        List<Video> videos = videoRepository.findByChannelId(channelId);
        return videos.stream()
                .map(videoMapper::mapToDto)
                .collect(Collectors.toList());
    }

    public Resource downloadVideo(VideoDto videoDto) {
        Resource resource = fileSystemService.readFile(videoDto.getFileName());
        increaseViewCount(videoDto);
        userService.addVideo(videoDto);
        return resource;
    }

    public VideoDto editVideoMetadata(VideoDto videoMetaDataDto) {
        Video video = getVideoById(videoMetaDataDto.getVideoId());
        video.setTitle(videoMetaDataDto.getVideoName());
        video.setDescription(videoMetaDataDto.getDescription());
        video.setFileName(videoMetaDataDto.getFileName());
        // Ignore Channel ID as it should not be possible to change the Channel of a Video
        video.setTags(videoMetaDataDto.getTags());
        video.setVideoStatus(videoMetaDataDto.getVideoStatus());
        // View Count is also ignored as its calculated independently
        videoRepository.save(video);
        return videoMapper.mapToDto(video);
    }

    public void deleteVideo(String id) {
        String videoUrl = getVideo(id).getFileName();
        fileSystemService.deleteFile(videoUrl);
    }

    public List<VideoDto> getSuggestedVideos(String userId) {
        Set<String> likedVideos = userService.getLikedVideos(userId);
        List<Video> likedVideoList = videoRepository.findByIdIn(likedVideos);
        List<String> tags = likedVideoList.stream()
                .map(video -> video.getTags())
                .flatMap(List::stream)
                .collect(Collectors.toList());

        return videoRepository.findByTagsIn(tags)
                .stream()
                .limit(5)
                .map(videoMapper::mapToDto)
                .collect(Collectors.toList());
    }

    private void increaseViewCount(VideoDto videoDto) {
        Video videoById = getVideoById(videoDto.getVideoId());
        videoById.increaseViewCount();
        videoRepository.save(videoById);
    }

    private Video getVideoById(String id) {
        return videoRepository.findById(id)
                .orElseThrow(() -> new YoutubeCloneException("Cannot find Video with ID - " + id));
    }

    public VideoDto like(String videoId) {
        if (userService.ifLikedVideo(videoId)) {
            throw new YoutubeCloneException("User already liked the video - " + videoId);
        }
        Video video = getVideoById(videoId);

        if (userService.ifDisLikedVideo(videoId)) {
            video.decreaseDisLikeCount();
            userService.removeFromDisLikedVideo(videoId);
        }
        video.increaseLikeCount();
        userService.addToLikedVideos(videoId);
        videoRepository.save(video);
        return videoMapper.mapToDto(video);
    }

    public VideoDto dislike(String videoId) {
        if (userService.ifDisLikedVideo(videoId)) {
            throw new YoutubeCloneException("User already disliked the video - " + videoId);
        }

        Video video = getVideoById(videoId);
        if (userService.ifLikedVideo(videoId)) {
            video.decreaseLikeCount();
            userService.removeFromLikedVideos(videoId);
        }
        video.increaseDisLikeCount();
        userService.addToDisLikedVideo(videoId);
        videoRepository.save(video);
        return videoMapper.mapToDto(video);
    }
}
