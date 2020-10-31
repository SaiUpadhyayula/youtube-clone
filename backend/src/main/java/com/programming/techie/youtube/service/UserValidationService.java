//package com.programming.techie.youtube.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.programming.techie.quotemachine.dto.UserInfoDTO;
//import com.programming.techie.quotemachine.exception.QuoteMachineException;
//import lombok.RequiredArgsConstructor;
//import lombok.SneakyThrows;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//
//import java.net.URI;
//import java.net.http.HttpClient;
//import java.net.http.HttpRequest;
//import java.net.http.HttpResponse;
//import java.net.http.HttpResponse.BodyHandlers;
//
//@Service
//@RequiredArgsConstructor
//public class UserValidationService {
//
//    @Value("${auth0.userinfo}")
//    private String userInfoEndpoint;
//    private final HttpClient httpClient = HttpClient.newBuilder()
//            .version(HttpClient.Version.HTTP_2)
//            .build();
//
//    @SneakyThrows
//    public UserInfoDTO validateUser(String authorizationHeader) {
//        if (authorizationHeader.startsWith("Bearer ")) {
//            String token = authorizationHeader.substring(7);
//            var request = HttpRequest.newBuilder()
//                    .GET()
//                    .uri(URI.create(userInfoEndpoint))
//                    .setHeader("Authorization", String.format("Bearer %s", token))
//                    .build();
//
//            HttpResponse<String> responseString = httpClient.send(request, BodyHandlers.ofString());
//            ObjectMapper objectMapper = new ObjectMapper();
//            return objectMapper.readValue(responseString.body(), UserInfoDTO.class);
//        } else {
//            throw new QuoteMachineException("Invalid Access Token");
//        }
//    }
//}
