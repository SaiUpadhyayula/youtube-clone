package com.programming.techie.youtube.service;

import com.programming.techie.youtube.exception.YoutubeCloneException;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static com.google.common.base.Preconditions.checkNotNull;
import static java.nio.file.Files.copy;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import static org.springframework.util.StringUtils.cleanPath;

@Service
public class FileSystemService {

    public static final String UPLOAD_DIR = "user-files";

    public String upload(MultipartFile file) {
        String fileName = extractFileName(file);
        checkForInvalidCharactersInFileName(fileName);
        Path targetLocation = createTargetDir(fileName);
        try {
            copy(file.getInputStream(), targetLocation, REPLACE_EXISTING);
        } catch (IOException ex) {
            throw new YoutubeCloneException("Exception Occurred when copying file", ex);
        }
        return fileName;
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path fileUploadDirectory = Paths.get(UPLOAD_DIR).toAbsolutePath().normalize();
            Path filePath = fileUploadDirectory.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new YoutubeCloneException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new YoutubeCloneException("File not found " + fileName, ex);
        }
    }

    public void deleteFile(String fileName) {
        Path fileUploadDirectory = Paths.get(UPLOAD_DIR).toAbsolutePath().normalize();
        Path filePath = fileUploadDirectory.resolve(fileName).normalize();
        try {
            Files.delete(filePath);
        } catch (IOException ex) {
            throw new YoutubeCloneException(String.format("Cannot find file with name %s", fileName), ex);
        }
    }

    private Path createTargetDir(String fileName) {
        Path fileUploadDirectory = Paths.get(UPLOAD_DIR).toAbsolutePath().normalize();
        try {
            Files.createDirectories(fileUploadDirectory);
        } catch (Exception ex) {
            throw new YoutubeCloneException("Could not create the directory where the uploaded files will be stored", ex);
        }
        return fileUploadDirectory.resolve(fileName);
    }

    private void checkForInvalidCharactersInFileName(String fileName) {
        if (fileName.contains(".."))
            throw new YoutubeCloneException("Sorry! Filename contains invalid path sequence " + fileName);
    }

    private static String extractFileName(MultipartFile file) {
        checkNotNull(file);
        checkNotNull(file.getOriginalFilename());
        return cleanPath(file.getOriginalFilename());
    }
}

