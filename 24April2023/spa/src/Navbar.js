import './Navbar.css';
import { Link as L, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <L to="/login">Login</L>
                <L to="/register">Register</L>
                <L to="/contact">Contact Us</L>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Navbar;









