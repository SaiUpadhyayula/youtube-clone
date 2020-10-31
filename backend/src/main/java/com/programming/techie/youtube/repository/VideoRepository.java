package com.programming.techie.youtube.repository;

import com.programming.techie.youtube.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface VideoRepository extends MongoRepository<Video, String> {
    List<Video> findByChannelId(String channelId);

    List<Video> findByTagsIn(List<String> tags);
}
