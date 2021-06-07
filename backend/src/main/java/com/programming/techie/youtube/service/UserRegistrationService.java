package com.programming.techie.youtube.service;

import com.programming.techie.youtube.dto.UserInfoDTO;
import com.programming.techie.youtube.model.User;
import com.programming.techie.youtube.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserRegistrationService {

    private final UserRepository userRepository;

    public void register(UserInfoDTO userInfoDTO) {
        Optional<User> existingUserOpt = userRepository.findByEmailAddress(userInfoDTO.getEmail());
        if (existingUserOpt.isPresent()) {
            userInfoDTO.setId(existingUserOpt.get().getId());
            return;
        }
        var user = new User();
        user.setSub(userInfoDTO.getSub());
        user.setEmailAddress(userInfoDTO.getEmail());
        user.setFirstName(userInfoDTO.getGivenName());
        user.setLastName(userInfoDTO.getFamilyName());
        user.setFullName(userInfoDTO.getName());
        user.setPicture(userInfoDTO.getPicture());
        user.setPicture(userInfoDTO.getPicture());
        userRepository.save(user);
    }
}
