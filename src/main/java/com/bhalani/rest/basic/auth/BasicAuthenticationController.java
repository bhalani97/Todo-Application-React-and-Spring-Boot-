package com.bhalani.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BasicAuthenticationController {

	@GetMapping("/basicauth")
	public AuthenticationBean getHelloWorld() {
		return new AuthenticationBean("You are authorized");
	
	}
	

	
}
