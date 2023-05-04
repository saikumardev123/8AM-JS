
import HOC from './HOC';
function Sellers(props) {

    return (
        <>
            <h1 onClick={props.updateCounter}>Seller Count is {props.counter}</h1>
        </>
    )

}

const SellersHOC = HOC(100, Sellers);

export default SellersHOC;