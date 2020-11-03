package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.dto.UserInfoDTO;
import com.programming.techie.youtube.service.UserRegistrationService;
import com.programming.techie.youtube.service.UserService;
import com.programming.techie.youtube.service.UserValidationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserValidationService userValidationService;
    private final UserRegistrationService userRegistrationService;

    @GetMapping("{id}/history")
    public ResponseEntity<Set<String>> userHistory(@PathVariable String id) {
        return ResponseEntity.ok(userService.
                get(id));
    }

    @PostMapping("validate")
    public ResponseEntity registerUser(HttpServletRequest httpServletRequest) {
        UserInfoDTO userInfoDTO = userValidationService.validate(httpServletRequest.getHeader("Authorization"));
        userRegistrationService.register(userInfoDTO);
        return ResponseEntity.ok(userInfoDTO);
    }
}
