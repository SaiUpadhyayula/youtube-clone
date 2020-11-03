package com.programming.techie.youtube.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "Users")
public class User {
    private String id;
    private String firstName;
    private String lastName;
    private String fullName;
    private String picture;
    private String emailAddress;
    private String sub;
    private Set<String> subscribedChannelIds = new HashSet<>();
    private Set<String> videoHistory = new LinkedHashSet<>();
    private Set<String> likedVideos = new HashSet<>();
    private Set<String> disLikedVideos = new HashSet<>();

    public void addToLikedVideos(String videoId) {
        likedVideos.add(videoId);
    }

    public void removeFromLikedVideos(String videoId) {
        likedVideos.remove(videoId);
    }

    public void addToDisLikedVideo(String videoId) {
        disLikedVideos.add(videoId);
    }

    public void removeFromDisLikedVideo(String videoId) {
        disLikedVideos.remove(videoId);
    }

    public void addToVideoHistory(String videoId) {
        videoHistory.add(videoId);
    }
}
