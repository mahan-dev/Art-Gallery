import React, { useContext, useEffect, useState } from 'react';
// import { CartContexts } from '../../context/Redirect_Store_CartContext';
import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
const Redirect_Store_Card = ({ data }) => {
    console.log(data);
    const { state, dispatch } = useContext(CartContextProvider);
    const { artist_title, baseimageurl, quantity, price } = data;
    const handleIncrease = () => {
        dispatch({type:"Increase", payload: data})

    }
    const handleDecrease = () => {
        dispatch({type:"Decrease", payload: data})

    }
    const handleRemove = () => {
        dispatch({type:"Remove", payload: data})

    }
    const [image, setImage] = useState([]);

    useEffect(()=>{
        setImage(`https://www.artic.edu/iiif/2/${data.image_id}/full/1686,/0/default.jpg`);
    },[])

    return (
        <div className='bg-orange-400 h-fit'>
            {console.log(price)}
            {console.log(quantity)}
            <span> {`title is :${artist_title}`} </span>
            <img src={image} alt="" width={200} />
            {/* <span>{`title :${technique}`}</span>HH
             <img src={baseimageurl} alt="" width={200} />
             <p>{quantity}</p> */}
            {/*
            <section>{data.elementId}</section> */}
            {quantity > 1 ?
                <button onClick={handleDecrease}>-</button> :
                <button onClick={handleRemove}>Remove</button>

            }
            <button onClick={handleIncrease}>+</button>
            
            <div>{`price : ${price}`}</div>
            <div>{state.selectedItems.price}</div>
            <div>{quantity}</div>


            {/* <button onClick={()=> dispatch({})} className='border '>add</button>
            <button onClick={()=> dispatch({})} className='border '>decrease</button> */}
        </div>
    );
};

export default Redirect_Store_Card;