package com.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name="Orders")
public class Order {
@Id
@GeneratedValue(strategy =GenerationType.IDENTITY)
@Column
private int id;
@Column
private int userid;
@Column
private int  productid;


public int getId() {
return id;
}


public void setId(int id) {
this.id = id;
}


public int getUserid() {
return userid;
}


public void setUserid(int userid) {
this.userid = userid;
}


public int getProductid() {
return productid;
}


public void setProductid(int productid) {
this.productid = productid;
}




}
