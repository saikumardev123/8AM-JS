package com.ecommerce.dao;

//import java.util.List;

import com.ecommerce.model.User;
import com.ecommerce.util.Response;

public interface UserDAO {
	public Response register(User user);
	public Response login(User user);
	public Response update(User user);
	public Response forgotPassword(User user);
}
