package com.programming.techie.youtube.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChannelRequest {
    private String channelId;
    private String channelName;
    private String userId;
}
