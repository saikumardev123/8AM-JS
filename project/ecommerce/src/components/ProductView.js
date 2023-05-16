import './Productview.css';
function ProductView() {
    var product = JSON.parse(localStorage.getItem("currentProduct"));
    return (
        <div>
            <br></br><br></br><br></br>
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane"><img src={product.imageUrl} /></div>
                                </div>

                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">{product.name}</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">41 reviews</span>
                                </div>
                                <p class="product-description">{product.description}</p>
                                <h4 class="price">current price: <span>{product.price}</span></h4>
                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button">add to cart</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductView;