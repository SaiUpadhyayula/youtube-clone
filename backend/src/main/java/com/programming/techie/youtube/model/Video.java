package com.programming.techie.youtube.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "Videos")
@Builder
public class Video {
    private String id;
    private String title;
    private String description;
    private String channelId;
    private int likes;
    private int dislikes;
    private List<String> tags;
    private String fileName;
    private VideoStatus videoStatus;
    private int viewCount = 0;

    public Integer increaseViewCount() {
        return viewCount + 1;
    }
}
