package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.model.Product;
import com.ecommerce.service.ProductService;
import com.ecommerce.util.Response;

@RequestMapping("/product")
@RestController
public class ProductController {
	@Autowired
	ProductService productService;
	
	@CrossOrigin
	@PostMapping("/add")
	public ResponseEntity<Response> addProduct(@RequestBody Product product) {
		System.out.println(product);
	Response response=productService.add(product);
		if(response.getOperation() == true) {
			return new ResponseEntity<Response>(response,HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
		}
		
}
	@CrossOrigin
	@PutMapping("/update")
	 public ResponseEntity<Response> update(@RequestBody Product product) {
		
		     Response response= productService.update(product);
		     if(response.getOperation() == true) {
					return new ResponseEntity<Response>(response,HttpStatus.OK);
					
				}
				else {
					return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
				}
	 }
	@CrossOrigin
	@DeleteMapping("/delete")
	public  ResponseEntity<Response> delete(@RequestBody Product product) {
		System.out.println("controller");
		Response response=productService.delete(product.getId());
		 if(response.getOperation() == true) {
				return new ResponseEntity<Response>(response,HttpStatus.OK);
				
			}
			else {
				return new ResponseEntity<Response>(response,HttpStatus.BAD_REQUEST);
			}
	}
	@GetMapping("/getById")
	 public ResponseEntity<Product> productById(@RequestBody Product product) {
		
		  Product result =  productService.getByid(product.getId());
		  
		  return new ResponseEntity<Product>(result, HttpStatus.OK);
	 }
	@CrossOrigin
	@GetMapping("/list")
	 public ResponseEntity<List<Product>> getAllProducts() {
		
		  List<Product> result =  productService.get();
		  
		  return new ResponseEntity<List<Product>>(result, HttpStatus.OK);
	 }
	
	

}
