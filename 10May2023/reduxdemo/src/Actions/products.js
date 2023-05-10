import axios from 'axios';
export default function getProducts() {

    console.log("action called");
    var promise = axios.get("https://fakestoreapi.com/products");

    return {
        payload: promise,
        type: 'GET_PRODUCTS'
    }

}