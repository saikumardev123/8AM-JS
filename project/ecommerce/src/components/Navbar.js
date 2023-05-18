import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Dashboard from './Dashboard';
import ProductView from './ProductView';
import Cart from './Cart';
function Navbar() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path="/login" element={<Login></Login>}></Route>
                    <Route exact path="/register" element={<Register></Register>}></Route>
                    <Route exact path="/products" element={<Products></Products>}></Route>
                    <Route exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route exact path="/productview" element={<ProductView></ProductView>}></Route>
                    <Route exact path="/cart" element={<Cart></Cart>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Navbar;