package com.programming.techie.youtube.utils;

import com.programming.techie.youtube.exception.YoutubeCloneException;
import org.springframework.core.io.Resource;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class HttpContentUtils {

    public static String determineContentType(HttpServletRequest request, Resource resource) {
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            throw new YoutubeCloneException("Exception occurred while downloading Video");
        }

        if (contentType == null) {
            contentType = "application/octet-stream";
        }
        return contentType;
    }
}
