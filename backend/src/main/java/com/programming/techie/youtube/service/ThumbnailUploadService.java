package com.programming.techie.youtube.service;

import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ThumbnailUploadService {

    private final FileService fileSystemService;

    public ThumbnailUploadService(FileService service) {
        this.fileSystemService = service;
    }

    public String uploadThumbnail(MultipartFile file) {
        return fileSystemService.upload(file);
    }

    public Resource downloadThumbnail(String fileName) {
        return fileSystemService.readFile(fileName);
    }
}
