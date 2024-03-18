import React, { useContext } from "react";
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className="gg">
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img className="productdisplay-main-img" src={product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(169)</p>
                    </div>
                    <div className="productdisplay-right-price">
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                        <div className="productdisplay-right-new-price">${product.new_price}</div>
                    </div>
                    <div className="productdisplay-right-description">
                        . Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                    </div>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category : </span>Women, Tshirt, Crop Top</p>
                    <p className="productdisplay-right-category"><span>Tags : </span>Modern, Latest</p>
                    <Link to="/"><p className="productdisplay-right-category"><span>Comment :  </span><input type="text" /><button className="abc">Submit</button></p></Link>

                </div>



            </div>
        </div>
    )
}
export default ProductDisplay;