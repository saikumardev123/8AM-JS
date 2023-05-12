package com.ecommerce.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ecommerce.model.Product;
import com.ecommerce.util.Response;
@Repository
public class ProductDAOImpl  implements ProductDAO{
	@Autowired
	 EntityManager entityManager;

	@Override
	public Response add(Product product) {
		Response response=new Response();
		Session session=entityManager.unwrap(Session.class);
		boolean status=false;
		List<Product> list =  get();
		System.out.println("before list"+list.size());
		 session.save(product);
		  
		  List<Product> list2 =  get();
			System.out.println("after list"+list2.size());
			
			if((list.size()+1) == list2.size()) {
			
				status = true;
			}
			if(status==true) {
				response.setMessage("product added sucessfully");
				response.setOperation(true);
				response.setStatusCode(200);
				return response;
			}
			
			else {
				response.setMessage("product was not added");
				response.setOperation(false);
				response.setStatusCode(401);
				return response;
				
			}
		
	}

	@Override
	public List<Product> get() {
		Session session = entityManager.unwrap(Session.class);
		List<Product> list = session.createQuery("from Product").list();
		return list;
	}
	@Override
	public Product getByid(int id) {
		// TODO Auto-generated method stub
		Session session = entityManager.unwrap(Session.class);
		Product product =  session.load(Product.class, id);
		
		return product;
	}
	@Override
	public Response update(Product product) {
		Response response=new Response();
		Session session = entityManager.unwrap(Session.class);
		// code
		 System.out.println("In productDAO Impl" + product);
		session.update(product); 
		if(product!=null) {
			response.setMessage("product updated sucessfully");
			response.setOperation(true);
			response.setStatusCode(200);
		}
		else {
			response.setMessage("product is not  updated ");
			response.setOperation(false);
			response.setStatusCode(401);
		}
		return response;
	}
	@Override
	public Response delete(int  id) {
		Response response=new Response();
		System.out.println("dao");
				Session session = entityManager.unwrap(Session.class);
				// code
				Product product =  session.load(Product.class, id);
				session.delete(product);
				
				if(product!=null) {
					response.setMessage("product  deleted sucessfully");
					response.setOperation(true);
					response.setStatusCode(200);
					
				}
				else {
					response.setMessage("product was not  deleted");
					response.setOperation(false);
					response.setStatusCode(401);
				}
				return response;
	}

}
