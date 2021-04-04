package com.programming.techie.youtube.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.programming.techie.youtube.exception.YoutubeCloneException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class S3Service implements FileService {

    private static final String BUCKET_NAME = "programming-techie-tuts";
    private final AmazonS3Client amazonS3Client;

    @Override
    public String upload(MultipartFile file) {
        String videoKey = String.format("video-%s.mp4", UUID.randomUUID().toString());
        var metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType("video/mp4");
        try {
            amazonS3Client.putObject(BUCKET_NAME, videoKey, file.getInputStream(), metadata);
        } catch (IOException e) {
            throw new YoutubeCloneException("An Exception Occurred while uploading file");
        }
        amazonS3Client.setObjectAcl(BUCKET_NAME, videoKey, CannedAccessControlList.PublicRead);
        return amazonS3Client.getResourceUrl(BUCKET_NAME, videoKey);
    }

    @Override
    public void deleteFile(String fileName) {

    }
}
