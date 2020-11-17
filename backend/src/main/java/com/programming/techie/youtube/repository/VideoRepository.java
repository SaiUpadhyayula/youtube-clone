package com.programming.techie.youtube.repository;

import com.programming.techie.youtube.model.Video;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000",
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE},
        allowedHeaders = "*",
        maxAge = 3600)
@RepositoryRestResource(path = "videos", collectionResourceRel = "videos")
public interface VideoRepository extends MongoRepository<Video, String> {
    List<Video> findByChannelId(String channelId);

    List<Video> findByTagsIn(List<String> tags);

    List<Video> findByIdIn(Set<String> likedVideos);
}
