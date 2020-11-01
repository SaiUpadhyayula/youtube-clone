package com.programming.techie.youtube.repository;

import com.programming.techie.youtube.model.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ChannelRepository extends MongoRepository<Channel, String> {
    Optional<Channel> findByTitle(String channelName);
}
