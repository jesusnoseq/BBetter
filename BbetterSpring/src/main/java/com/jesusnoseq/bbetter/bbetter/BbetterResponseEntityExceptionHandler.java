package com.jesusnoseq.bbetter.bbetter;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.jesusnoseq.bbetter.bbetter.purposes.PurposeNotFoundException;

@ControllerAdvice
@RestController
public class BbetterResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
	
	
	
	@ExceptionHandler(PurposeNotFoundException.class)
	public final ResponseEntity<Object> handleUserNotFoundException(PurposeNotFoundException ex, WebRequest request){
		return new ResponseEntity<Object>( ex.getMessage(),HttpStatus.NOT_FOUND);
	}
	
	@Override
	public final ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex ,
			HttpHeaders headers, HttpStatus status, WebRequest request){
		return new ResponseEntity<Object>( "Validation failed - "+ex.getBindingResult().toString(), HttpStatus.BAD_REQUEST);
	}
	
}
