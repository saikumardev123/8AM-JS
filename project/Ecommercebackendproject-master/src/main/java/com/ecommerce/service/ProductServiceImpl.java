package com.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.ProductDAO;
import com.ecommerce.model.Product;
import com.ecommerce.util.Response;

@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	ProductDAO productDAO;
	
	 @Transactional
	public Response add(Product product) {
		
		return productDAO.add(product);
	}

	 @Transactional
	public List<Product> get() {
		
		return productDAO.get();
	}

	 @Transactional
	public Product getByid(int id) {
		
		return productDAO.getByid(id);
	}

	 @Transactional
	public Response update(Product product) {
		
		return productDAO.update(product);
		
	}

	 @Transactional
	public Response delete(int id) {
		
		 System.out.println("service");
	    
		return productDAO.delete(id);
			
			
		
	}

}
