package com.jesusnoseq.bbetter.bbetter.purposes;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PurposeNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	
	public PurposeNotFoundException(String message) {
		super(message);
	}


}
