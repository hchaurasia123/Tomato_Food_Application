import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext =createContext(null)
const StoreConttextProvider=(props)=>{ // pass tha props

    const [cartItems,setCartItems]=useState({});

    const addToCart = (itemid) =>{
        if(!cartItems[itemid]){
            setCartItems((prev)=>({...prev,[itemid]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removeFrom=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))

    }


    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){

                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount+=itemInfo.price*cartItems[item];
            }
        }

        return totalAmount;
    }

    // useEffect(()=>{
    //   console.log(cartItems);
      
    // },[cartItems])

    const contextvalue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFrom,
        getTotalAmount


    }
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )

}

export default StoreConttextProvider;