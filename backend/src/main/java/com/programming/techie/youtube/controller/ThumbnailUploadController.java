package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.service.ThumbnailUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;

import static com.programming.techie.youtube.utils.HttpContentUtils.determineContentType;

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

    @GetMapping("download/{fileName}")
    public ResponseEntity<Resource> downloadThumbnail(@PathVariable String fileName, HttpServletRequest request) {
        Resource resource = thumbnailUploadService.downloadThumbnail(fileName);
        String contentType = determineContentType(request, resource);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }
}
