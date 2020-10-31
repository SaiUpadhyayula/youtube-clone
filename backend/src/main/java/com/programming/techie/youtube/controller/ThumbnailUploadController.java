package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.service.ThumbnailUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api/thumbnail")
@RequiredArgsConstructor
public class ThumbnailUploadController {

    private final ThumbnailUploadService thumbnailUploadService;

    @PostMapping("upload")
    public ResponseEntity<String> uploadThumbnail(@RequestParam("file") MultipartFile file,
                                                  UriComponentsBuilder uriComponentsBuilder) {
        String thumbnailUrl = thumbnailUploadService.uploadThumbnail(file);
        UriComponents uriComponents = uriComponentsBuilder.path("/{id}").buildAndExpand(thumbnailUrl);
        return ResponseEntity.created(uriComponents.toUri())
                .body("Thumbnail Uploaded Successfully");
    }
}
