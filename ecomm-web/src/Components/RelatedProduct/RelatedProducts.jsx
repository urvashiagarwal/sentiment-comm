import React from "react";
import './RelatedProducts.css'
import data_product from "../Assets/data";
import Item from "../Item/Item";
const RelatedProducts=()=>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr/>
            <div className="relatedproducts-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image}new_price={item.new_price} old_price={item.old_price}/>
// after doing this we get our re;ated product section but when we click on any product we are not going back to top of page so here we add a functionality to item page window.scrollto(axis like 0,0)
                })}

            </div>

        </div>
    )
}
export default RelatedProducts;