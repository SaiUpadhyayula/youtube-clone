package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.dto.CommentDto;
import com.programming.techie.youtube.dto.UploadVideoResponse;
import com.programming.techie.youtube.dto.VideoDto;
import com.programming.techie.youtube.service.VideoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api/video/")
@RequiredArgsConstructor
public class VideoController {

    private final VideoService videoService;

    @PostMapping("upload")
    public ResponseEntity<UploadVideoResponse> uploadVideo(@RequestParam("file") MultipartFile file,
                                                           @RequestParam("userId") String userId,
                                                           UriComponentsBuilder uriComponentsBuilder) {
        UploadVideoResponse videoResponse = videoService.uploadVideo(file, userId);
        UriComponents uriComponents = uriComponentsBuilder.path("/{id}").buildAndExpand(videoResponse.getVideoId());
        return ResponseEntity.created(uriComponents.toUri())
                .body(videoResponse);
    }

    @PostMapping("thumbnail/upload")
    public ResponseEntity<String> uploadThumbnail(@RequestParam("file") MultipartFile file,
                                                  @RequestParam("videoId") String videoId,
                                                  UriComponentsBuilder uriComponentsBuilder) {
        String thumbnailUrl = videoService.uploadThumbnail(file, videoId);
        UriComponents uriComponents = uriComponentsBuilder.path("/{id}").buildAndExpand(thumbnailUrl);
        return ResponseEntity.created(uriComponents.toUri())
                .body("Thumbnail Uploaded Successfully");
    }

    @PutMapping
    public ResponseEntity<VideoDto> editVideoMetadata(@RequestBody @Validated VideoDto videoMetaDataDto) {
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

    @GetMapping("channel/{userId}")
    public ResponseEntity<List<VideoDto>> allChannelVideos(@PathVariable String userId) {
        List<VideoDto> allVideosByChannel = videoService.getAllVideosByChannel(userId);
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

    @PostMapping("{id]/comment")
    public ResponseEntity<Void> addComments(@PathVariable String id, @RequestBody CommentDto commentDto) {
        videoService.addComment(commentDto, id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("{id}/comment")
    public ResponseEntity<List<CommentDto>> getAllComments(@PathVariable String id) {
        return ResponseEntity.ok(videoService.getAllComments(id));
    }
}
