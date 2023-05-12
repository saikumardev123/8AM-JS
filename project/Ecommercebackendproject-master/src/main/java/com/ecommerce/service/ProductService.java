package com.ecommerce.service;

import java.util.List;

import com.ecommerce.model.Product;
import com.ecommerce.util.Response;

public interface ProductService {
	public Response add(Product product);
	public List<Product> get();
	public Product getByid(int id);
	public Response update(Product product);
	public Response delete(int id);


	

}
