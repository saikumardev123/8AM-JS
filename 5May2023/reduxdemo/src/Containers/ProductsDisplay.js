
import { connect } from 'react-redux';
function ProductsDisplay(props) {

    console.log("props in ProductsDisplay", props);
    return (
        <div>
            <h1>Products List</h1>
            {props.products.length > 0 ? props.products[0].title : 0}
        </div>
    )
}
export default connect((appState) => {

    return { products: appState.products }

}, null)(ProductsDisplay)