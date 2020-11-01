package com.programming.techie.youtube.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(value = "Channels")
public class Channel {
    private String id;
    private String title;
    private String ownerName;
    private String ownerEmail;
    private List<String> subscriberIds;
    private String ownerId;
}
