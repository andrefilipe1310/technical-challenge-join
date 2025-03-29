package com.join.technical_challenge.exceptions.global;

import org.springframework.http.HttpStatus;

public class RestException {

    private String message;
    private HttpStatus statusCode;


    public RestException( HttpStatus statusCode, String message){
        this.message = message;
        this.statusCode = statusCode;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(HttpStatus statusCode) {
        this.statusCode = statusCode;
    }
}
