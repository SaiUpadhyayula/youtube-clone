package com.programming.techie.youtube;

import com.programming.techie.youtube.model.Video;
import org.springframework.content.commons.repository.ContentStore;
import org.springframework.content.rest.StoreRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@StoreRestResource
public interface VideoContentStore extends ContentStore<Video, String> {
}
