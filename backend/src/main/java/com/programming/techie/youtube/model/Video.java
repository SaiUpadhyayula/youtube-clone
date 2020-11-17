package com.programming.techie.youtube.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.content.commons.annotations.ContentId;
import org.springframework.content.commons.annotations.ContentLength;
import org.springframework.content.commons.annotations.MimeType;
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
    private String thumbnailUrl;
    @ContentId
    private String contentId;
    @ContentLength
    private long contentLength;
    @MimeType
    private String mimeType = "video/mp4";

    public void increaseViewCount() {
        viewCount++;
    }

    public void increaseLikeCount() {
        likes++;
    }

    public void decreaseLikeCount() {
        likes--;
    }

    public void increaseDisLikeCount() {
        dislikes++;
    }

    public void decreaseDisLikeCount() {
        dislikes--;
    }
}
