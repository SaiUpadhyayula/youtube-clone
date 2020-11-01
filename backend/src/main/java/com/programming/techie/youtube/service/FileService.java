package com.programming.techie.youtube.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    String upload(MultipartFile file);

    Resource readFile(String fileName);

    void deleteFile(String fileName);
}
