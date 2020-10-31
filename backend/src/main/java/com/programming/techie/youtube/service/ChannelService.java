package com.programming.techie.youtube.service;

import com.programming.techie.youtube.dto.ChannelDto;
import com.programming.techie.youtube.dto.ChannelRequest;
import com.programming.techie.youtube.exception.YoutubeCloneException;
import com.programming.techie.youtube.model.Channel;
import com.programming.techie.youtube.model.User;
import com.programming.techie.youtube.repository.ChannelRepository;
import com.programming.techie.youtube.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChannelService {

    private final ChannelRepository channelRepository;
    private final UserRepository userRepository;

    public void create(ChannelRequest channelRequest) {
        Channel channel = new Channel();
        channel.setTitle(channelRequest.getChannelName());
        channelRepository.save(channel);
    }

    public List<ChannelDto> getAllChannels() {
        List<Channel> allChannels = channelRepository.findAll();
        return allChannels.stream().map(this::mapChannel).collect(Collectors.toList());
    }

    public void editChannel(ChannelRequest channelRequest) {
        Channel channel = getChannelById(channelRequest.getChannelId());
        channel.setTitle(channelRequest.getChannelName());
        channelRepository.save(channel);
    }

    public void deleteChannel(String channelId) {
        channelRepository.deleteById(channelId);
    }

    public ChannelDto getSingleChannel(String channelId) {
        Channel channel = getChannelById(channelId);
        return mapChannel(channel);
    }

    private ChannelDto mapChannel(Channel channel) {
        ChannelDto channelDto = new ChannelDto();
        channelDto.setChannelName(channel.getTitle());
        channelDto.setSubscriberCount(channel.getSubscriberIds().size());
        return channelDto;
    }

    public void subscribeUser(String id, String userId) {
        Channel channelById = getChannelById(id);
        List<String> subscriberIds = channelById.getSubscriberIds();
        if (subscriberIds.contains(userId)) {
            throw new YoutubeCloneException("User Already Subscribed to the Channel");
        }
        subscriberIds.add(userId);
        channelById.setSubscriberIds(subscriberIds);
        channelRepository.save(channelById);

        User user = getUserById(userId);
        user.getSubscribedChannelIds().add(id);
        userRepository.save(user);
    }

    private User getUserById(String userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new YoutubeCloneException("Cannot Find User By Id " + userId));
    }

    private Channel getChannelById(String channelId) {
        return channelRepository.findById(channelId)
                .orElseThrow(() -> new YoutubeCloneException("Cannot find Channel by Id - " + channelId));
    }
}
