import { useDispatch } from "react-redux";
import { addProduct } from './ProductSlice';
function Products() {
    const dispatch = useDispatch();
    const addAProduct = () => {
        dispatch(addProduct({
            pid: 101,
            name: "product 1",
            price: 200
        }));
    }
    return (
        <div>
            <button onClick={addAProduct}>Add Product</button>
        </div>
    )
}
export default Products;