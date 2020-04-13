package com.bhalani.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping("/hello-world")
	public HelloWorld getHelloWorld() {
		return new HelloWorld("Divyesh");
	
	}
	

	@GetMapping("/hello-world/{name}")
	public HelloWorld getHelloWorld(@PathVariable String name) {
		return new HelloWorld("Hiii " + name);
		//throw new RuntimeException("Something Went Wrong");
	}
}
