package com.programming.techie.youtube.dto;

import com.programming.techie.youtube.model.VideoStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VideoDto {
    private String videoId;
    @NotBlank
    private String userId;
    @NotBlank
    private String videoName;
    @NotBlank
    private String description;
    @Size(min = 1)
    private List<String> tags;
    private VideoStatus videoStatus;
    @NotBlank
    private String url;
    @NotBlank
    private String thumbnailUrl;
    @Min(value = 0)
    private int likeCount;
    @Min(value = 0)
    private int dislikeCount;
}
