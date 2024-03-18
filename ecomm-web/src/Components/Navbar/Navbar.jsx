import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.avif'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar=()=>{
    const [Menu, setMenu] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to="/"><img className="a" src={logo} alt=""></img></Link>
                <Link to="/"><p>SHOPPERS</p></Link>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}><Link style={{ textDecoration: "none" }} to="/">Shop</Link> {Menu === 'Shop' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Mens") }}><Link style={{ textDecoration: "none" }} to="/Mens">Electronics</Link>{Menu === 'Mens' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Women") }}><Link style={{ textDecoration: "none" }} to="/Women">Beauty</Link>{Menu === 'Women' ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("Kids") }}><Link style={{ textDecoration: "none" }} to="/Kids">Clothes</Link>{Menu === 'Kids' ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/Cart"><img className="b" src={cart_icon} alt="" /></Link>

                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>

    )
}
export default Navbar;