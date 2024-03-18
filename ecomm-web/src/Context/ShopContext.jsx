import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null);

// here we create one context and initialized with null(RHS) and this context is stored in shop context(LHS) that we are exporting 

const getDefaultCart=()=>{
    //  initially cart is empty so 
    let cart ={};
    // now we will create no of key value pairs mean kitne item add kr skte ho which  is equal to all_product.length 
    for(let index=0;index<all_product.length+1;index++){
        // here we initialize cart with 0 items
        cart[index]=0;
    }
    return cart;
}
// now we will cfeate shop context provider
const ShopContextProvider=(props)=>{
    // here we will store all those values which we need in future
    // within this fn we pass a variable context value ={jo value context provider dega vo}

// in shop context provider we use use state for calling above cart function
const[cartItems,setCartItems]= useState((getDefaultCart));

// spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
        const addToCart =(itemId)=>{
            setCartItems((prev) => {
                console.log(cartItems);  
            return { ...prev, [itemId]: prev[itemId] + 1 };
        });
        
        }
        const removeFromCart =(itemId)=>{
        setCartItems((prev) => {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        });
        }
        const getTotalCartAmount = ()=>{
            let totalAmount =0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0)
                {
                    let itemInfo = all_product.find((product)=>product.id===Number(item))
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
            return totalAmount;
        }

        const getTotalCartItems = ()=>{
            let totalItem = 0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0)
                {
                    totalItem += cartItems[item];
                }
            }
            return totalItem;
        }

        const ContextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
        // now using the context we can access cartItems data in any of our component

        return(
            <ShopContext.Provider value={ContextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}
export default ShopContextProvider;