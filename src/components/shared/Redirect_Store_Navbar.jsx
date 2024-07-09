

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
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
import cartIcon from "../../assets/images/icon_store/cart-shopping.svg";
import Cookies from 'js-cookie';
import { isInCart } from "../../helper/functions";
import { Redirect_Store_Context_ } from '../../context/Redirect_Store_Context';

import Style from '../../Styles/Redirect_Store_Navbar.module.css';

export const searchContextProvider = createContext();
const Redirect_Store_Navbar = ({ children }) => {
    const { setSearchValue } = useContext(Redirect_Store_Context_);

    // const [itemsCounter, setItemsCounter] = useState(() => {
    //     // Initialize items counter with the value from local storage or 0 if it doesn't exist
    //     const localCounter = parseInt(localStorage.getItem('itemsCounter'));
    // return localCounter || state.itemsCounter  || 0;
    // });
    const [itemsCounter, setItemsCounter] = useState();
    const [showSearch, setShowSearch] = useState(false);
    const [clickTracker, setClickTracker] = useState(false);
    const [sTracker, setStracker ] = useState(false);
    const [search, setSearch] = useState("");

    const localCounter = parseInt(localStorage.getItem('itemsCounter'));

    const { state, dispatch } = useContext(CartContextProvider);

    const searchBox = useRef();
    const searchContainer = useRef();
    // useEffect(() => {
        //     // Update items counter state whenever state.itemsCounter changes
        //     setItemsCounter(state.itemsCounter);
        // }, [state.itemsCounter]);
        
        const activeSearchBox = () => {
            setShowSearch(true)
            console.log("is true")
        }
        
        const deactiveSearchBox = ()=>{
            if (clickTracker){
                return true
            } 
            
            setShowSearch(false)
            
        }
        
        const clickSearchBox = (event)=>{
            setClickTracker(true)
            setStracker(false);
            if(clickTracker && searchBox.current.contains(event.target)){
                console.log("Trrrr")
                return true
            }
            // setShowSearch(true);
            
        }
        
        const searchHandler = (event) => {
            setSearch(event.target.value);
            setSearchValue(event.target.value);
            
        }


        const clickSearchInput =(event)=>{
            setClickTracker(true);
            setStracker(true);
            if(searchBox.current.contains(event.target)){
                return true;
            } 

        }

        const outOfSearchBox = (event)=>{
            console.log(event.target)
            if(!searchContainer.current.contains(event.target)){
                setShowSearch(false)
                setClickTracker(false)
                console.log("falseessss")
            }
             setStracker(false);
        }

        useEffect(() => {
            
            window.addEventListener("click", outOfSearchBox);
            // Update local storage whenever the items counter changes
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
            setItemsCounter(state.itemsCounter);
            return()=>{
                window.removeEventListener("click", outOfSearchBox);

            }
        }, [state.itemsCounter, clickTracker, sTracker]);
        
        return (
            <>
            {/* { console.log(state.itemsCounter)} */}

            <header className={`${Style.header}   `} >
                {/* <section>
                    Home
                </section> */}

                <section className={`${Style.header_title} `}>
                    <a href="$$$">EDITIONS</a>
                </section>

                {/* <section className='flex'> */}

                <section className={`${Style.header_search_wrapper} mb-2`} ref={searchContainer}>

                    <div className="mx-2 relative" 
                    onMouseOver={activeSearchBox} 
                    onMouseLeave={deactiveSearchBox} 
                    onClick={clickSearchBox}
                    ref={searchBox}
                    >search</div>

                    {showSearch && (

                        <input type="text"
                            className='wrapper_search_box top-[100%] right-0 outline-none w-[200px] rad absolute '
                            onChange={searchHandler}
                            onClick={clickSearchInput}
                        />
                    )

                    }
                </section>

                <div className="mx-2 relative">
                    <Link to="/Cart">
                        <img style={{ cursor: "pointer" }} src={cartIcon} width={25} alt="" />
                    </Link>
                    <span className="absolute top-[15px]">{itemsCounter}</span>
                </div>
                {/* </section> */}

            </header >


        </>
    );
};

export default Redirect_Store_Navbar;