package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.dto.ChannelDto;
import com.programming.techie.youtube.dto.ChannelRequest;
import com.programming.techie.youtube.service.ChannelService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;

@RestController
@RequestMapping("/api/channels/")
@RequiredArgsConstructor
public class ChannelController {

    private final ChannelService channelService;

    @PostMapping
    public ResponseEntity create(ChannelRequest channelRequest) {
        channelService.create(channelRequest);
        return ResponseEntity.status(CREATED).build();
    }

    @GetMapping
    public ResponseEntity<List<ChannelDto>> getAllChannels() {
        return ResponseEntity.ok(channelService.getAllChannels());
    }

    @GetMapping("{id}")
    public ResponseEntity<ChannelDto> getSingleChannel(@PathVariable String id) {
        return ResponseEntity.ok(channelService.getSingleChannel(id));
    }

    @PutMapping
    public ResponseEntity editChannel(ChannelRequest channelRequest) {
        channelService.editChannel(channelRequest);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteChannel(@PathVariable String id) {
        channelService.deleteChannel(id);
        return ResponseEntity.status(NO_CONTENT).body(String.format("Channel with ID %s is deleted", id));
    }

    @PutMapping("{id}subscribe/{userId}")
    public void subscribeUser(@PathVariable String id, @PathVariable String userId) {
        channelService.subscribeUser(id, userId);
    }
}
