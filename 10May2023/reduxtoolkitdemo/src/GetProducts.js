import { useSelector } from "react-redux";

function GetProducts() {
    var products = useSelector((appState) => appState.products.products);
    console.log(products);
    return (
        <div>
            {/* <h1>Length is {products.length}</h1> */}
        </div>
    )


}
export default GetProducts;