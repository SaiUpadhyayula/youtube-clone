package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.dto.UploadVideoResponse;
import com.programming.techie.youtube.dto.VideoDto;
import com.programming.techie.youtube.exception.YoutubeCloneException;
import com.programming.techie.youtube.service.VideoService;
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
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/video/")
@RequiredArgsConstructor
public class VideoController {

    private final VideoService videoService;

    @PostMapping("upload")
    public ResponseEntity<UploadVideoResponse> uploadVideo(@RequestParam("file") MultipartFile file,
                                                           @RequestParam("channelId") String channelId,
                                                           UriComponentsBuilder uriComponentsBuilder) {
        UploadVideoResponse videoResponse = videoService.uploadVideo(file, channelId);
        UriComponents uriComponents = uriComponentsBuilder.path("/{id}").buildAndExpand(videoResponse.getVideoId());
        return ResponseEntity.created(uriComponents.toUri())
                .body(videoResponse);
    }

    @GetMapping("download/{id}")
    public ResponseEntity<Resource> getVideo(@PathVariable String id, HttpServletRequest request) {
        VideoDto videoDto = videoService.getVideo(id);
        Resource resource = videoService.downloadVideo(videoDto);
        String contentType = determineContentType(request, resource);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @PutMapping
    public ResponseEntity<VideoDto> editVideoMetadata(@RequestBody VideoDto videoMetaDataDto) {
        return ResponseEntity.ok(videoService.editVideoMetadata(videoMetaDataDto));
    }

    @GetMapping("{id}")
    public ResponseEntity<VideoDto> getVideoMetaData(@PathVariable String id) {
        VideoDto videoDto = videoService.getVideo(id);
        return ResponseEntity.ok(videoDto);
    }

    @GetMapping
    public ResponseEntity<List<VideoDto>> getVideoMetaData() {
        List<VideoDto> videoDto = videoService.getAllVideos();
        return ResponseEntity.ok(videoDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteVideo(@PathVariable String id) {
        videoService.deleteVideo(id);
        return ResponseEntity.noContent().build();

    }

    @GetMapping("channel/{channelId}")
    public ResponseEntity<List<VideoDto>> allChannelVideos(@PathVariable String channelId) {
        List<VideoDto> allVideosByChannel = videoService.getAllVideosByChannel(channelId);
        return ResponseEntity.ok(allVideosByChannel);
    }

    @PostMapping("{id}/like")
    public ResponseEntity<VideoDto> likeVideo(@PathVariable String id) {
        return ResponseEntity.ok(videoService.like(id));
    }

    @PostMapping("{id}/dislike")
    public ResponseEntity<VideoDto> disLikeVideo(@PathVariable String id) {
        return ResponseEntity.ok(videoService.dislike(id));
    }

    @GetMapping("suggested/{userId}")
    public ResponseEntity<List<VideoDto>> getSuggestedVideos(@PathVariable String userId) {
        return ResponseEntity.ok(videoService.getSuggestedVideos(userId));
    }

    private String determineContentType(HttpServletRequest request, Resource resource) {
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            throw new YoutubeCloneException("Exception occurred while downloading Video");
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return contentType;
    }
}
