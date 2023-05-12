package com.ecommerce.controller;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.model.User;
import com.ecommerce.service.UserService;
import com.ecommerce.util.Response;
@RequestMapping("/user")
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	@CrossOrigin
	@PostMapping("/register")
	public ResponseEntity<Response> register(@RequestBody User user) {
		System.out.println("username"+user.getUsername());
		
		Response response=userService.register(user);
		if(response.getOperation()==true) {
			return new ResponseEntity<Response>(response,HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
		}
	
		
	}
	@CrossOrigin
	@PostMapping("/login")
	public ResponseEntity<Response> login(@RequestBody User user) {
		//System.out.println("username :"+user.getUsername());
		//System.out.println("password :"+user.getPassword());
		Response response=userService.login(user);
		if(response.getOperation()==true) {
			return new ResponseEntity<Response>(response,HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
		}
	
	}
	@PutMapping("/update")
	public ResponseEntity<Response> update(@RequestBody User user){
		Response response=userService.update(user);
		if(response.getOperation()==true) {
			return new ResponseEntity<Response>(response,HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
		}
		
	}
	@PostMapping("/getByemail")
	 public ResponseEntity<Response> forgotPassword(@RequestBody User user) {
		 // Response result =  userService.getByemail(user.getEmail());
		Response response=userService.forgotPassword(user);
		if(response.getOperation()==true) {
			return new ResponseEntity<Response>(response,HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
		}
		  
		 
	 }
	
	


}
