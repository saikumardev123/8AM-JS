
import getProducts from '../Actions/products';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Products(props) {
    const fetchProducts = () => {
        props.getProducts();
    }
    return (
        <div>
            <h1>Products</h1>
            <button onClick={fetchProducts}>Fetch Products</button>
        </div>
    )
}
export default connect(null, (dispatch) => {
    return bindActionCreators({ getProducts: getProducts }, dispatch);
})(Products)