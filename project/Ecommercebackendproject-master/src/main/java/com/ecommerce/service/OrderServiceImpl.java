package com.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.OrderDAO;
import com.ecommerce.model.Order;
import com.ecommerce.model.Product;
import com.ecommerce.util.Response;

@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	OrderDAO orderDAO;

	@Override
	public Response placeOrder(Order order) {
		
		return orderDAO.placeOrder(order);
	}
	@Transactional
	@Override
	public List<Order> get() {
		// TODO Auto-generated method stub
		return  orderDAO.get();
	}
	@Override
	public Order getOrderByUserid(int userid) {
		// TODO Auto-generated method stub
		return orderDAO.getOrderByUserid(userid);
	}

}
