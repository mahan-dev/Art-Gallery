import React, { useContext, useEffect, useState } from 'react';
import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
import Redirect_Store_CartContext, {sumItems, initialState} from '../../context/Redirect_Store_CartContext';
import { quantityCounter } from '../../helper/functions';

import Cookies from 'js-cookie';
import { ProductContextProvider } from '../../context/Rediret_Store_Product_Context_Provider';
import Redirect_Store_ShopCart from './Redirect_Store_ShopCart';

// importing trash icon

import TrashIcon from "../../assets/images/redirec_store_Image/trash.svg";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Redirect_Store_Product = ({ data}) => {
    
    
    const [image, setImage] = useState([])
    const [sortDate, setSortDate] = useState ([]);
    const {artist_title, date_end, price} = data;
    
    
    
    
    
    // console.log(price)
   
    useEffect(()=>{
        if (data && date_end) {
            const dates = date_end;
            setSortDate(prev => [...prev, dates]);
            
        } 
        
        
        setImage(`https://www.artic.edu/iiif/2/${data.image_id}/full/1686,/0/default.jpg`);
    },[data])
    // console.log(sortDate);
    const { state, dispatch } = useContext(CartContextProvider);
    // console.log(state.selectedItems);
    
    const [itemsCounter, setItemsCounter] = useState(() => {
        // Initialize items counter with the value from local storage or 0 if it doesn't exist
        const localCounter = parseInt(localStorage.getItem('itemsCounter'));
        return localCounter || state.itemsCounter  || 0;
    });
    
    // const quantityCatcher = state.selectedItems.map(item => {
        //     // Perform any transformation or logic you need here
        //     return item; // For example, just returning the item itself
        // });
        
        // // Check if the first item exists and has a quantity property before accessing it
        // const firstItem = quantityCatcher[0];
        // const quantity = firstItem?.quantity || 0;
        
        // console.log(quantity);
        
        
        // Now quantityCatcher array contains the mapped result
        
        // You can access and use the quantityCatcher array however you like
        // console.log(quantityCatcher);
        
        
        useEffect(() => {
            // Update local storage whenever the items counter changes
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
        }, [state.itemsCounter]);
        
        useEffect(() => {
            // Update items counter state whenever state.itemsCounter changes
            setItemsCounter(state.itemsCounter);
        }, [state.itemsCounter]);
        
        const isInCart = state.selectedItems.some(item => item.elementId === data.elementId);
        // const value = state.selectedItems.some(item => item.elementId === item.quantity);
        // let value = state.selectedItems.find(item => item.elementId === item.quantity)?.quantity;
        
        const handleAddToCart = () => {
            dispatch({ type: "AddCard", payload: data });
            
        };
        
        
        const handleIncrease = () => {
            dispatch({ type: "Increase", payload: data });
            
        };
        
        const handleDecrease = () => {
            dispatch({ type: "Decrease", payload: data });
            // Ensure quantity doesn't go below zero
        };
        
        const handleRemove = () => {
            dispatch({ type: "Remove", payload: data });
            
        };
        
        {if (itemsCounter > 0) {
            console.log(itemsCounter)
        }}
        
        return (
            <div>
            {/* {console.log(image)} */}
                {/* {console.log(sortDate) } */}
           
                
            <section className='' >
                
                <div>{artist_title}</div>
                <img src={image} className='h-[100%] object-cover' width={"200px"} alt="product_image" />
                {<div>{price}$</div>}
                {/* {quantity > 1 && <button onClick={handleDecrease}>-</button>}
                {
                    console.log(quantity)
                }
                {quantity === 1 && <button onClick={handleRemove}>trash</button>}
                
                {console.log(value)}
                {quantity > 0 && <span>{value}</span>}
                
            {console.log(state.quantity)} */}
                {quantityCounter(state, data.elementId) > 1 && <button style={{ cursor: "pointer" }} onClick={() => dispatch({ type: "Decrease", payload: data })}>-</button>}
                    {quantityCounter(state, data.elementId) === 1 && <button style={{ cursor: "pointer" }} onClick={() => dispatch({ type: "Remove", payload: data })}><img src={TrashIcon} style={{display: "inline-block"}} alt="" width={13} /></button>}
                    {quantityCounter(state, data.elementId) > 0 && <span> {quantityCounter(state, data.elementId)} </span>}
               {/* {isInCart ?`${price}` : ""} */}
               
               
               {/* {console.log(price)} */}
                
                {isInCart ?
                    <button onClick={handleIncrease}>+</button> :
                    <button style={{ cursor: "pointer" }} onClick={handleAddToCart}>Add to Cart</button>
                }
            </section>
        </div>
    );
};

export default Redirect_Store_Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
// import Redirect_Store_CartContext, {sumItems, initialState} from '../../context/Redirect_Store_CartContext';

// import Cookies from 'js-cookie';
// const Redirect_Store_Product = ({ data}) => {
//     const {baseimageurl, quantity} = data;
//     console.log(quantity);
//     const { state, dispatch } = useContext(CartContextProvider);
//     console.log(state.itemsCounter)
//     // const [quantity, setQuantity] = useState(parseInt(localStorage.getItem(`product_quantity_${data.elementId}`)) || 0);
    
    
    
//     console.log(sumItems);
//     console.log(initialState.selectedItems);
//     // useEffect(() => {
        
//     //     const savedItemsCounterContent = Cookies.get('elementId');
//     //     if (savedItemsCounterContent !== null) {
//     //         dispatch({ type: 'set_ContentNumber', payload: parseInt(savedItemsCounterContent, 10) });
//     //     }
//     //     localStorage.setItem(`product_quantity_${data.elementId}`, quantity.toString());
//     // }, [data.elementId, quantity]);
    
//     const isInCart = state.selectedItems.some(item => item.elementId === data.elementId);
    
//     const handleAddToCart = () => {
//         dispatch({ type: "AddCard", payload: data });
//     };
    
    
//     const handleIncrease = () => {
//         dispatch({ type: "Increase", payload: data });
//     };
    
//     const handleDecrease = () => {
//         dispatch({ type: "Decrease", payload: data });
        
//     };
    
//     const handleRemove = () => {
//         dispatch({ type: "Remove", payload: data });
//     };
    
//     {if (quantity > 0) {
//         console.log(quantity)
//     }}
//     console.log(state.quantity)
//     return (
//         <div>
                
//             <section>
//                 {console.log(quantity)}
//                 <img src={baseimageurl} width={"200px"} alt="" />
//                 {quantity > 1 && <button onClick={handleDecrease}>-</button>}
                
//                 {quantity === 1 && <button onClick={handleRemove}>trash</button>}
//                 {quantity > 0 && <span>{state.itemsCounter}</span>}
//                 {/* {state.itemsCounter} */}
                
//                 {isInCart ?
//                     <button onClick={handleIncrease}>+</button> :
//                     <button style={{ cursor: "pointer" }} onClick={handleAddToCart}>Add to Cart</button>
//                 }
//             </section>
//         </div>
//     );
// };

// export default Redirect_Store_Product;