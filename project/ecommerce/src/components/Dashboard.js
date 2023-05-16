import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
    var navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(
        () => {
            axios.get("http://localhost:9091/product/list").then(
                response => {
                    console.log(response);
                    setProducts(response.data);
                },
                error => {

                    console.log(error);
                }
            );
        }, []
    )

    const navigateToProductView = (product) => {
        localStorage.setItem('currentProduct', JSON.stringify(product));
        navigate("/productview");
    }

    const renderList = () => {

        let list = products.map(product => {
            var productWithUI = <div class="col">
                <div class="card" onClick={() => navigateToProductView(product)}>
                    <img width="300px" height="550px"
                        src={product.imageUrl}
                        class="card-img-top" alt="Hollywood Sign on The Hill" />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                    </div>
                </div>
            </div>
            return productWithUI;
        })
        return list;

    }

    return (
        <div>
            <h1>Dashboard</h1>

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {products.length > 0 ? renderList() : <h1>Products Loading...</h1>}


            </div>

        </div>
    )

}
export default Dashboard;