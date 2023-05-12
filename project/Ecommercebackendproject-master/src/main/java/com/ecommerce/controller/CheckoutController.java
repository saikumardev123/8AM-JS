package com.ecommerce.controller;

import org.json.JSONObject;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
public class CheckoutController {
	@CrossOrigin()
	@RequestMapping(value = {"/payment"}, method = RequestMethod.GET)
	public String payment(Model model){
	    model.addAttribute("rzp_key_id", "rzp_test_hkegSGSTXFaiIX");
	    model.addAttribute("rzp_currency", "INR");
	    model.addAttribute("rzp_company_name", "DigitalLync");
	    return "users/payment";
	}
	@CrossOrigin()
	@GetMapping("/payment/createOrderId/{amount}")
	@ResponseBody
	public String createPaymentOrderId(@PathVariable String amount) {
	    String orderId=null;
	    try {
	        RazorpayClient razorpay = new RazorpayClient("rzp_test_hkegSGSTXFaiIX", "qTH4tvuY2eMbiUsAcN0PoiD1");
	        JSONObject orderRequest = new JSONObject();
	        orderRequest.put("amount", amount); // amount in the smallest currency unit
	        orderRequest.put("currency", "INR");
	        orderRequest.put("receipt", "order_rcptid_11");

	        Order order = razorpay.orders.create(orderRequest);
	        orderId = order.get("id");
	    } catch (RazorpayException e) {
	        // Handle Exception
	        System.out.println(e.getMessage());
	    }
	    return orderId;
	}

    @CrossOrigin()
	@RequestMapping(value = {"/payment/success/{amount}/{contactCount}/{companyName}/{currency}/{description}"}, method = RequestMethod.POST)
    public String paymentSuccess(Model model,
                            
                                 @RequestParam("razorpay_payment_id") String razorpayPaymentId,
                                 @RequestParam("razorpay_order_id") String razorpayOrderId,
                                 @RequestParam("razorpay_signature") String razorpaySignature,
                                 @PathVariable Float amount,
                                 @PathVariable Integer contactCount,
                                 @PathVariable String companyName,
                                 @PathVariable String currency,
                                 @PathVariable String description,
                                 RedirectAttributes redirectAttributes
    ){
        System.out.println("Save all data, which on success we get!");
        return "redirect:/payment";
    }













    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    












}
