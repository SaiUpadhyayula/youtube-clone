package com.programming.techie.youtube.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ThumbnailUploadService {

    private final FileSystemService fileSystemService;

    public ThumbnailUploadService(FileSystemService service) {
        this.fileSystemService = service;
    }

    public String uploadThumbnail(MultipartFile file) {
        return fileSystemService.upload(file);

    }
}
