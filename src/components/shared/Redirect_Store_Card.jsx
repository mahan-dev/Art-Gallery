import React, { useContext, useEffect, useState } from 'react';
// import { CartContexts } from '../../context/Redirect_Store_CartContext';
import TrashIcon from "../../assets/images/redirec_store_Image/trash.svg";
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
        <div className=' h-fit py-4'>
            {/* {console.log(price)}
            {console.log(quantity)} */}
            <section className='bg-[#f0ffff] p-[1.2rem] w-fit rounded-lg'> 
                
            <span> {`title is :${artist_title}`} </span>
            <img src={image} className='rounded-md' alt="" style={{width: "300px", height: '300px', objectFit: "cover"}} />
            </section>
           
            <section className='flex mt-4 gap-4'>
            {quantity > 1 ?
                <button className='bg-white px-2 rounded-md cursor-pointer  w-[40px]' onClick={handleDecrease}>-</button> :
                <button className='bg-white px-2 rounded-md cursor-pointer  w-[40px]' onClick={handleRemove}><img style={{margin: "0 auto"}} src={TrashIcon} width={17} alt="" /></button>

            }
            <div> {quantity }</div>
            <button className='bg-white px-2 rounded-md cursor-pointer  w-[40px]' onClick={handleIncrease}>+</button>
            
            <div>{`price : ${price * quantity}`}</div>
            {console.log(state)}
            </section>
            {/* {console.log(state.selectedItems.price)} */}
            {/* <div>{state.selectedItems.price}</div> */}


            {/* <button onClick={()=> dispatch({})} className='border '>add</button>
            <button onClick={()=> dispatch({})} className='border '>decrease</button> */}
        </div>
    );
};

export default Redirect_Store_Card;