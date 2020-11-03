package com.programming.techie.youtube.controller;

import com.programming.techie.youtube.exception.YoutubeCloneException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class YoutubeCloneExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = YoutubeCloneException.class)
    protected ResponseEntity<Object> handleException(YoutubeCloneException exception, WebRequest webRequest) {
        String responseBody = exception.getMessage();
        return handleExceptionInternal(exception, responseBody, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR, webRequest);
    }
}
