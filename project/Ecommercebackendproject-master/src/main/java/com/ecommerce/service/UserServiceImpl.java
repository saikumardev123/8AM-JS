package com.ecommerce.service;
import com.ecommerce.util.Response;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecommerce.dao.UserDAO;
import com.ecommerce.model.User;
import com.ecommerce.util.Response;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDAO userDAO;
	@Transactional
	@Override
	public Response register(User user) {
		return  userDAO.register(user);
		
	}
	@Transactional
	@Override
	public Response login(User user) {
		
		return userDAO.login(user);
	}

	@Override
	public Response update(User user) {
		// TODO Auto-generated method stub
		  return userDAO.update(user);
	}
	@Override
	public Response forgotPassword(User user) {
		// TODO Auto-generated method stub
		return userDAO.forgotPassword(user);
	}
	
	

}
