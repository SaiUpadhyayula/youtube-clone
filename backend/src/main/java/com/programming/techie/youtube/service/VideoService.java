package com.programming.techie.youtube.service;

import com.programming.techie.youtube.dto.VideoDto;
import com.programming.techie.youtube.exception.YoutubeCloneException;
import com.programming.techie.youtube.model.Video;
import com.programming.techie.youtube.repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VideoService {

    private final VideoRepository videoRepository;
    private final FileService fileSystemService;
    private final UserHistoryService userHistoryService;

    public VideoDto uploadVideo(MultipartFile file) {
        String fileName = fileSystemService.upload(file);
        Video video = new Video();
        video.setFileName(fileName);
        videoRepository.save(video);
        return mapToDto(video);
    }

    public VideoDto getVideo(String id) {
        return mapToDto(getVideoById(id));
    }

    private Video getVideoById(String id) {
        return videoRepository.findById(id)
                .orElseThrow(() -> new YoutubeCloneException("Cannot find Video with ID - " + id));
    }

    public Resource downloadVideo(VideoDto videoDto) {
        Resource resource = fileSystemService.readFile(videoDto.getVideoUrl());
        increaseViewCount(videoDto);
        userHistoryService.addVideo(videoDto);
        return resource;
    }

    private void increaseViewCount(VideoDto videoDto) {
        Video videoById = getVideoById(videoDto.getVideoId());
        videoById.setViewCount(videoById.increaseViewCount());
        videoRepository.save(videoById);
    }

    private VideoDto mapToDto(Video video) {
        VideoDto videoDto = new VideoDto();
        videoDto.setVideoId(video.getId());
        videoDto.setVideoUrl(video.getFileName());
        return videoDto;
    }

    public void editVideoMetadata(VideoDto videoMetaDataDto) {

    }

    public List<VideoDto> getAllVideosByChannel(String channelId) {
        List<Video> videos = videoRepository.findByChannelId(channelId);
        return videos.stream()
                .map(video -> mapToDto(video))
                .collect(Collectors.toList());
    }

    public void deleteVideo(String id) {
        String videoUrl = getVideo(id).getVideoUrl();
        fileSystemService.deleteFile(videoUrl);
    }

    public List<VideoDto> getSuggestedVideos(String id) {
        Video video = getVideoById(id);
        return videoRepository.findByTagsIn(video.getTags())
                .stream()
                .filter(suggestedVideo -> !suggestedVideo.getId().equals(id))
                .map(vid -> mapToDto(vid))
                .collect(Collectors.toList());
    }
}
