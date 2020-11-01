package com.programming.techie.youtube.service;

import com.programming.techie.youtube.dto.VideoDto;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class UserHistoryService {
    public void addVideo(VideoDto videoDto) {
        // Retrieve Current User
        // Update UserHistory with Video Id
    }

    public List<String> get(String id) {
        // Retrieve the Watch History of the User
        return Collections.emptyList();
    }
}
