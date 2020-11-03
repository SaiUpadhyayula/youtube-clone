package com.programming.techie.youtube.dto;

import com.programming.techie.youtube.model.VideoStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VideoDto {
    private String videoId;
    private String channelId;
    private String videoName;
    private String description;
    private List<String> tags;
    private VideoStatus videoStatus;
    private String fileName;
}
