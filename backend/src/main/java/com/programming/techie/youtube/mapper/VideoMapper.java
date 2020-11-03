package com.programming.techie.youtube.mapper;

import com.programming.techie.youtube.dto.VideoDto;
import com.programming.techie.youtube.model.Video;
import org.springframework.stereotype.Service;

@Service
public class VideoMapper {
    public VideoDto mapToDto(Video video) {
        return VideoDto.builder()
                .videoId(video.getId())
                .fileName(video.getFileName())
                .description(video.getDescription())
                .tags(video.getTags())
                .videoName(video.getTitle())
                .videoStatus(video.getVideoStatus())
                .channelId(video.getChannelId())
                .likeCount(video.getLikes())
                .dislikeCount(video.getDislikes())
                .build();
    }

    public Video mapToVideo(VideoDto videoDto, String fileName) {
        return Video.builder().description(videoDto.getDescription())
                .fileName(fileName)
                .channelId(videoDto.getChannelId())
                .tags(videoDto.getTags())
                .title(videoDto.getVideoName())
                .videoStatus(videoDto.getVideoStatus())
                .build();
    }
}
