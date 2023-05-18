function Cart() {

    var cart;

    if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    const removeFromCart = (id) => {
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((cartItem, i) => {
            if (cartItem.id == id) {
                cart.splice(i, 1);
            }
        })
        alert("Item removed from Cart");
    }

    const renderCartItems = () => {
        var list = cart.map(cartItem => {

            return <tr>
                <td class="col-sm-8 col-md-6">
                    <div class="media">
                        <a class="thumbnail pull-left" href="#"> <img class="media-object" src={cartItem.imageUrl} style={{ width: "72px", height: "72px" }} /> </a>
                        <div class="media-body">
                            <h4 class="media-heading">{cartItem.name}</h4>

                        </div>
                    </div></td>


                <td class="col-sm-1 col-md-1 text-center"><strong>${cartItem.price}</strong></td>
                <td class="col-sm-1 col-md-1">
                    <button onClick={() => removeFromCart(cartItem.id)} type="button" class="btn btn-danger">
                        <span class="glyphicon glyphicon-remove"></span> Remove
  </button></td>
            </tr>

        })

        return list;
    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-10 col-md-offset-1">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>

                                    <th class="text-center">Price</th>

                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCartItems()}

                                <tr>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>   </td>
                                    <td>
                                        <button type="button" class="btn btn-default">
                                            <span class="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button></td>
                                    <td>
                                        <button type="button" class="btn btn-success">
                                            Checkout <span class="glyphicon glyphicon-play"></span>
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