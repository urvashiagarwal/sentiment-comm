import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation, useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay"
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox"
import RelatedProducts from "../Components/RelatedProduct/RelatedProducts";
//we are clicking on our product but its not opening so we first create product in product.jsx using context and grab all product data
const Product=()=>{
const {all_product}=useContext(ShopContext);
console.log(all_product,"dd")
//we use useParams to get the product id, so we will find products in all product data
const {productId}= useParams();
//here we create a func e which will find the number of product id
const product = all_product.find((e)=>e.id===Number(productId))
//now we have to display our product on our page

//Before designing we create a breadcrum component in component folder
    return(
        <div>
            <h1>{all_product.productId}</h1>
            <Breadcrum product={product}/>
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}
export default Product;