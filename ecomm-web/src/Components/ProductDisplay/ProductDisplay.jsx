import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
    const [comment, setComment] = useState(""); // Changed state variable name to match backend

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }), // Changed property name to match backend
            });

            if (!response.ok) {
                throw new Error('Failed to create comment');
            }

            console.log('Comment created successfully');
            // You can handle success message or redirection here
        } catch (error) {
            console.error('Error creating comment:', error);
            // Handle error (display error message, etc.)
        }
    };

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
                    <p className="productdisplay-right-category">Comment :
                        <textarea name="comment" id="comment-box" cols="30" rows="10" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
