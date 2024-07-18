import React, { useContext, useEffect, useState } from 'react';
import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
import { Link } from 'react-router-dom';
import Redirect_Store_CartContext, {sumItems} from '../../context/Redirect_Store_CartContext';
import { quantityCounter } from "../../helper/functions";
import Styles from "../../Styles/Redirect_Store_Product.module.css";
import Cookies from 'js-cookie';
import { ProductContextProvider } from '../../context/Rediret_Store_Product_Context_Provider';
import Redirect_Store_ShopCart from './Redirect_Store_ShopCart';

// importing trash icon
import Skeleton from 'react-loading-skeleton';

import TrashIcon from "../../assets/images/redirec_store_Image/trash.svg";
import 'react-loading-skeleton/dist/skeleton.css';

const Redirect_Store_Product = ({ data }) => {

    const [image, setImage] = useState([])
    const [sortDate, setSortDate] = useState ([]);
    const [loading, setLoading] = useState(true);
    const {artist_title, date_end, price} = data;


    
    const getImage = ()=>{
        if(data && data.image_id){
            setImage(`https://www.artic.edu/iiif/2/${data.image_id}/full/1686,/0/default.jpg`);
            setLoading(false)
        }
        
    }
   

  
    // console.log(sortDate);
    const { state, dispatch } = useContext(CartContextProvider);

    const [itemsCounter, setItemsCounter] = useState(() => {
        // Initialize items counter with the value from local storage or 0 if it doesn't exist
        const localCounter = parseInt(localStorage.getItem('itemsCounter'));
        return localCounter || state.itemsCounter  || 0;
    });
    

        
        useEffect(() => {
            // Update items counter state whenever state.itemsCounter changes
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
            setItemsCounter(state.itemsCounter);


            getImage();
        }, [state.itemsCounter, data]);
        
        const isInCart = state.selectedItems.some(item => item.elementId === data.elementId);
     
        // const value = state.selectedItems.some(item => item.elementId === item.quantity);
        // let value = state.selectedItems.find(item => item.elementId === item.quantity)?.quantity;
        
        return (
            <div>
         
           {loading ? <Skeleton width={"100%"} height={400} /> : <section className={`${Styles.product_container} h-[100%]`} >
                
                <div>{artist_title ? artist_title : "no title"}</div>
                <div id='wrapper_product_image' style={{ minHeight: '200px' }}  >


                    {loading ? (
                        <Skeleton width={"100%"} height={300} />
                    ) : (
                        <img src={image} className='h-[100%] object-cover my-4' id='store_product_image' alt="product_image" />
                    )}


                </div>
                {loading ? (
                        <Skeleton width={100} height={50} />
                    ) : (
                        <Link className=' inline-block bg-black text-white p-2 rounded-md mb-2' to={`/Store/${data.elementId}`}>  
                        detail
                        </Link>
                    )}

                    {loading ? (
                        <Skeleton width={100} height={50} />
                    ) : (
                        <div className='bg-white w-fit rounded-md p-1'>{price}$</div>
                    )}

                {quantityCounter(state, data.elementId) > 1 && <button style={{ cursor: "pointer" }} onClick={() => dispatch({ type: "Decrease", payload: data })}>-</button>}
                {quantityCounter(state, data.elementId) === 1 && <button style={{ cursor: "pointer" }} onClick={() => dispatch({ type: "Remove", payload: data })}><img src={TrashIcon} style={{display: "inline-block"}} alt="" width={13} /></button>}
                {quantityCounter(state, data.elementId) > 0 && <span> {quantityCounter(state, data.elementId)} </span>}
                
                {isInCart ?
                    <button onClick={()=> dispatch({type: "Increase", payload: data})}>+</button> :
                    <button className='' style={{ cursor: "pointer" }} onClick={()=> dispatch({type:"AddCard", payload:data})}>Add to Cart</button>
                }
            </section>}
              
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