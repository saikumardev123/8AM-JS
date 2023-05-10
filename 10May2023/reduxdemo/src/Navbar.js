import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Products from './Containers/Products';
import ProductsDisplay from './Containers/ProductsDisplay';

function Navbar() {

    return (
        <div>
            <BrowserRouter>

                <Link to="/home">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/fetch">Fetch Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/show">Show Products</Link>

                <Routes>

                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/fetch" element={<Products></Products>}></Route>
                    <Route path="/show" element={<ProductsDisplay></ProductsDisplay>}></Route>

                </Routes>

            </BrowserRouter>
        </div>
    )

}
export default Navbar;