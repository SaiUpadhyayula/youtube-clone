package com.programming.techie.youtube.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "Videos")
public class Video {
    private String id;
    private String title;
    private String description;
    private String thumbnailUrl;
    private Integer views;
    private Long channelId;
    private Integer likes;
    private Integer dislikes;
    private List<String> tags;
    private String fileName;
    private VideoStatus videoStatus;
    private Integer viewCount;

    public Integer increaseViewCount() {
        return viewCount + 1;
    }
}
