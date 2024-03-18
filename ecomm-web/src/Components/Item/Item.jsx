import React from "react";
import './Item.css'
import { Link, useNavigate } from "react-router-dom";
const Item=(props)=>{
    // const navigate = useNavigate();
    // function handlePage(event){
    //     navigate('/Product' , {state:props.id});
    // }
    return(
        <div className="item">
        {/* here we add one onclick event on item so that whenever someone click on any product they will go to top of the page */}
        <Link to ={`/Product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
            <p>{props.name}</p>
            <div className="item-prices">
            <div className="item-prices-new">
                ${props.new_price}
            </div>
            <div className="item-prices-old">
                ${props.old_price}
            </div>
            </div>

        </div>
        
    )
}
export default Item;