

// useEffect(() => {

//     const savedItemsCounterContent = Cookies.get('elementId');
//     if (savedItemsCounterContent !== null) {
//         dispatch({ type: 'set_ContentNumber', payload: parseInt(savedItemsCounterContent, 10) });
//     }
//     localStorage.setItem(`product_quantity_${state.elementId}`, quantity.toString());
// }, [state.elementId, quantity]);



    // useEffect(() => {
    //     const savedItemsCounter = Cookies.get('itemsCounter');
    //     if (savedItemsCounter !== null) {
    //         dispatch({ type: "set_reCounter", payload: parseInt(savedItemsCounter, 10) });
    //     }
    // }, [dispatch]);
    import React, { useContext, useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';

    import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
    import cartIcon from "../../assets/images/icon_store/cart-shopping.svg";
    import Cookies from 'js-cookie';
    import {isInCart} from "../../helper/functions";
    const Redirect_Store_Navbar = () => {
        
        const {state, dispatch} = useContext(CartContextProvider);
        const [itemsCounter, setItemsCounter] = useState(() => {
            // Initialize items counter with the value from local storage or 0 if it doesn't exist
            const localCounter = parseInt(localStorage.getItem('itemsCounter'));
        return localCounter || state.itemsCounter  || 0;
        });
    
       
        useEffect(() => {
            // Update local storage whenever the items counter changes
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
        }, [state.itemsCounter]);
    
        useEffect(() => {
            // Update items counter state whenever state.itemsCounter changes
            setItemsCounter(state.itemsCounter);
        }, [state.itemsCounter]);
    
        
        // const [quantity, setQuantity] = useState(parseInt(localStorage.getItem(`product_quantity_${state.elementId}`)) || 0);
        // useEffect(() => {
        //     Cookies.set('itemsCounter', state.itemsCounter.toString(), { expires: 7 });
        // }, [state.itemsCounter]);
        return (
            <div>
                { console.log(state.itemsCounter)}
                
                <header className={`${""} header flex justify-between items-center py-8 bg-slate-500`} >
                    <section>
                        <ul className={`${""} flex`}>
                            <li className={`${""} px-2`}><a href="$$">DROPs</a></li>
                            <li className={`${""} px-2`}><a href="$$">DROPs</a></li>
                            <li className={`${""} px-2`}><a href="$$">DROPs</a></li>
                            <li className={`${""} px-2`}><a href="$$">DROPs</a></li>
                        </ul>
                    </section>
                    <section>
                        <a href="$$$">EDITIONS</a>
                    </section>
                    <section className={`${""} flex`} >
                        <div className="mx-2">search</div>
                        <div className="mx-2 relative">
                        <Link to="/Cart">
                            <img style={{cursor: "pointer"}} src={cartIcon} width={25} alt="" />
                        </Link>
                            <span className="absolute top-[15px]">{itemsCounter}</span>
                        </div>
                    </section>
                </header>
            </div>
        );
    };

    export default Redirect_Store_Navbar;