import HOC from './HOC';
function Products(props) {
    return (
        <>
            <h1 onClick={props.updateCounter}>Products Count is {props.counter}</h1>
        </>
    )
}
const ProductsHOC = HOC(11, Products);
export default ProductsHOC;
