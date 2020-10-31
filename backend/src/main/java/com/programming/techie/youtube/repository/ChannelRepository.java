package com.programming.techie.youtube.repository;

import com.programming.techie.youtube.model.Channel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChannelRepository extends MongoRepository<Channel, String> {
}
