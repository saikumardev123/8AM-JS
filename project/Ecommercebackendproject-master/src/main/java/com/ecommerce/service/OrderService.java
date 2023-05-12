package com.ecommerce.service;

import java.util.List;

import com.ecommerce.model.Order;
import com.ecommerce.model.Product;
import com.ecommerce.util.Response;

public interface OrderService {

	public	Response placeOrder(Order order);

	public List<Order> get();
	
	public Order getOrderByUserid(int userId);

}
