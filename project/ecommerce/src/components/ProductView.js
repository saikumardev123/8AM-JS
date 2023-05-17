import './Productview.css';
function ProductView() {
    var product = JSON.parse(localStorage.getItem("currentProduct"));
    return (
        <div>
            <br></br><br></br><br></br>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">


                                <img src={product.imageUrl} />


                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span>
                                </div>
                                <p className="product-description">{product.description}</p>
                                <h4 className="price">current price: <span>{product.price}</span></h4>
                                <div className="action">
                                    <button className="add-to-cart btn btn-default" type="button">add to cart</button>

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