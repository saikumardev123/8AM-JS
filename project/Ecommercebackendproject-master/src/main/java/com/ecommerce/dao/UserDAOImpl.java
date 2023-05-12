package com.ecommerce.dao;

import com.util.EmailUtil;
import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.ecommerce.model.User;
import com.ecommerce.util.Response;



@Repository
public class UserDAOImpl implements UserDAO {
	@Autowired
	private EntityManager entityManager;
	javax.mail.Session sessiontwo;
	

	@Override
	public Response register(User user) {
		Session session=entityManager.unwrap(Session.class);
		Response response=new Response();
		int i=(int) session.save(user);
		if(i!=0) {
			response.setMessage("user registered successfullly");
			response.setOperation(true);
			response.setStatusCode(200);
			return response;
		}
		else {
			response.setMessage("user registeration false");
			response.setOperation(false);
			response.setStatusCode(500);
			return response;
		}
		
	}


	@Override
	public  Response login(User user) {
	Response response=new Response();
	boolean isUsernameMatched=false;
	boolean isPasswordMatched=false;
	Session currentSession=entityManager.unwrap(Session.class);
	String s ="from User";
	Query query = currentSession.createQuery(s,User.class);
	List<User> employees = query.getResultList();
	String role="";
	
	Iterator iterator = employees.iterator();
	while(iterator.hasNext()) {
	User user1=	(User) iterator.next();
	if(user1.getUsername().contentEquals(user.getUsername())) {
		isUsernameMatched=true;
		if(user1.getPassword().contentEquals(user.getPassword())) {
			isPasswordMatched=true;
			role = user1.getRole();
			break;
		}
		
	}
	}
	if(isPasswordMatched==true && isUsernameMatched==true) {
		response.setMessage("login success");
		response.setOperation(true);
		response.setStatusCode(200);
		response.setRole(role);
		
	}
	if(isUsernameMatched==true && isPasswordMatched==false) {
		response.setMessage("incorrect password");
		response.setOperation(true);
		response.setStatusCode(401);
		response.setRole(role);
		
	}
	if( isUsernameMatched==false) {
		response.setMessage("username not found");
		response.setOperation(true);
		response.setStatusCode(401);
		
	}
	return response;
	
	}
	@Override
	public Response update(User user) {
		Response response= new Response();
		Session session = entityManager.unwrap(Session.class);
		boolean isUsernameMatched=false;
		boolean isPasswordMatched=false;
		Session currentSession=entityManager.unwrap(Session.class);

				Transaction tx=session.beginTransaction();  
				Query q=session.createQuery("update User set password=:n where username=:i");  
				q.setParameter("n",user.password);  
				q.setParameter("i",user.username);  
				  
				int status=q.executeUpdate();  
				System.out.println(status);
				tx.commit(); 
				
			
		if(status!=0) {
			response.setMessage("update success");
			response.setOperation(true);
			response.setStatusCode(200);
			
		}
		else {
			response.setMessage("update fail");
			response.setOperation(false);
			response.setStatusCode(401);
			
		}
		//}
		
		return response;
		
	

		
		
	}


	@Override
	
	
	public Response forgotPassword(User user) {
		
		Response response = new Response();
		Session session2 = entityManager.unwrap(Session.class);
		boolean isEmailMatched=false;
		String s2="from User";
		Query query = session2.createQuery(s2,User.class);
		List<User> employees = query.getResultList();
		
		Iterator iterator = employees.iterator();
		while(iterator.hasNext()) {
		User user1=	(User) iterator.next();
		System.out.println(user1.getEmail());
		if(user.getEmail().contentEquals(user1.getEmail())) {
			isEmailMatched=true;
			
			break;
		}
		}
		 
		if(isEmailMatched==true) {
			// mail code
			
		final String fromEmail = "yousraazmath725@gmail.com"; //requires valid gmail id
			final String password = "zvdpgbyrfwqewkfu"; // correct password for gmail id
			final String toEmail = "azmathyousra@gmail.com"; // can be any email id 
			
			System.out.println("TLSEmail Start");
			Properties props = new Properties();
			props.put("mail.smtp.host", "smtp.gmail.com"); //SMTP Host
			props.put("mail.smtp.port", "587"); //TLS Port
			props.put("mail.smtp.auth", "true"); //enable authentication
			props.put("mail.smtp.starttls.enable", "true"); //enable STARTTLS
			
	                //create Authenticator object to pass in Session.getInstance argument
			Authenticator auth = new Authenticator() {
				//override the getPasswordAuthentication method
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication(fromEmail, password);
				}
			};
			
			javax.mail.Session.getInstance(props, auth);		
		EmailUtil.sendEmail(sessiontwo, toEmail,"TLSEmail Testing Subject", "TLSEmail Please Reset your password");
			
	    
		    
		    response.setMessage("email is sent ");
			response.setOperation(true);
			response.setStatusCode(200);
		}

			
			else {
				response.setMessage("email not sent");
				response.setOperation(false);
				response.setStatusCode(401);
				
			}
		
		return response;
		}
	


	
	

	
}
	
