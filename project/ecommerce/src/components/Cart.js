import { useState } from 'react';
import axios from 'axios';
function Cart() {
    const [state, setState] = useState(0);
    var cart;
    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const removeFromCart = (id) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((cartItem, i) => {
            if (cartItem.id == id) {
                cart.splice(i, 1);
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart));
        setState(state + 1);
    }

    const checkout = async () => {

        var data = {
            amount: 25000 * 1000,
            currency: "INR"

        }
        axios.post('http://localhost:9012/createOrder', data).then(
            async response => {
                const res = await loadScript(
                    "https://checkout.razorpay.com/v1/checkout.js"
                );
                console.log("Res", res);
                console.log("response", response);
                // localStorage.setItem('orderId', response.data.id);
                // window.location.href = "payment.html";
                var options = {
                    "key": "rzp_test_yNwTLapO6BFmov",
                    "amount": "250000",
                    "currency": "INR",
                    "name": "Dummy Academy",
                    "description": "Pay & Checkout this Course, Upgrade your DSA Skill",
                    "image": "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png",
                    "order_id": response.data.id,
                    "handler": function (response) {
                        console.log(response)
                        alert("This step of Payment Succeeded");
                    }

                };
                var razorpayObject = new window.Razorpay(options);
                razorpayObject.open();
                razorpayObject.on('payment.failed', function (response) {
                    console.log(response);
                    alert("This step of Payment Failed");
                });
            },
            error => {
                console.log(error);
            }
        )

    }

    const renderCartItems = () => {
        var list = cart.map(cartItem => {

            return <tr key={cartItem.id}>
                <td className="col-sm-8 col-md-6">
                    <div className="media">
                        <a className="thumbnail pull-left" href="#"> <img className="media-object" src={cartItem.imageUrl} style={{ width: "72px", height: "72px" }} /> </a>
                        <div className="media-body">
                            <h4 className="media-heading">{cartItem.name}</h4>

                        </div>
                    </div></td>


                <td className="col-sm-1 col-md-1 text-center"><strong>${cartItem.price}</strong></td>
                <td className="col-sm-1 col-md-1">
                    <button onClick={() => removeFromCart(cartItem.id)} type="button" className="btn btn-danger">
                        <span className="glyphicon glyphicon-remove"></span> Remove
  </button></td>
            </tr>

        })

        return list;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>

                                    <th className="text-center">Price</th>

                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCartItems()}

                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button type="button" className="btn btn-default">
                                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button></td>
                                    <td>
                                        <button onClick={() => checkout()} type="button" className="btn btn-success">
                                            Checkout <span className="glyphicon glyphicon-play"></span>
                                        </button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;











