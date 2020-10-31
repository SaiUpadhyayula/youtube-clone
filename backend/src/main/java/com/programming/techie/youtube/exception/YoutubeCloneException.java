package com.programming.techie.youtube.exception;

public class YoutubeCloneException extends RuntimeException {
    public YoutubeCloneException(String message) {
        super(message);
    }

    public YoutubeCloneException(String message, Exception exception) {
        super(message, exception);
    }
}
