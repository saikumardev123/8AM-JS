package com.ecommerce.dao;

import java.util.List;

import com.ecommerce.model.Order;
import com.ecommerce.model.Product;
import com.ecommerce.util.Response;

public interface OrderDAO {

	 public Response placeOrder(Order order);

	public List<Order> get();
	
	public Order getOrderByUserid(int userId);

}
