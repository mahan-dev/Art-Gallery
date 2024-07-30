import React, { useContext } from 'react';
import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
import Redirect_Store_Card from './Redirect_Store_Card';
import Redirect_Store_Product from './Redirect_Store_Product';
import PurchasedIcon from "../../assets/purchased_icon/circle-check.svg";
import Styles from "../../Styles/Redirect_Store_Shop_Cart.module.css";

import ShopCartEmptyIcon from "../../assets/purchased_icon/cart-circle-xmark.svg";
import { Link } from 'react-router-dom';

const Redirect_Store_ShopCart = ({ data }) => {
    const { state, dispatch } = useContext(CartContextProvider);
    const { total, checkout } = state;


    // const {state, dispatch} = useContext(CartContextProvider)
    return (
        <section>
            {!checkout &&
                <div className={`${state.itemsCounter > 0 ? "bg-[#b7b7b7] px-6 py-4 text-[1.2rem]" : "flex flex-col  justify-center h-screen items-center"}`}>
                    {state.selectedItems.map(item => <Redirect_Store_Card key={item.elementId} data={item} />)}
                    <section className={`${!state.itemsCounter > 0 ? `${Styles.emptyCart} bg-[#F6F6F6] flex flex-col gap-4 text-center mx-4 items-center rounded-md p-8` : "" }`}>

                        {state.itemsCounter > 0 ?

                            (<div> you've chosen : {state.itemsCounter} products </div>) :
                            !(state.itemsCounter > 0) && !checkout ?
                                (<div> <img src={ShopCartEmptyIcon} width={30} alt="" /> </div>) : ""
                        }
                        {!total > 0 && !checkout ?
                            (<Link to="/store"> do you wanna buy something ?</Link>) : ""
                        }
                    </section>

                    {total > 0 ?
                        (<div className='mt-4 flex flex-col gap-4' >
                            <button className='bg-white px-2 rounded-md cursor-pointer w-fit' onClick={() => dispatch({ type: "Checkout", payload: data })} >Checkout</button>
                            <button className='bg-white px-2 rounded-md cursor-pointer w-fit' onClick={() => dispatch({ type: "Clear", payload: data })}>clear</button>
                            <p>your'e total price is : ${total}</p>
                        </div>) : ""

                    }

                </div>
            }

            {checkout ?
                (
                    <section className='flex justify-center items-center h-screen flex-col'>
                        <section className={`${Styles.payment_wrapper} flex text-center flex-col items-center gap-4 bg-[#F6F6F6] rounded-md p-8`}>
                            <img src={PurchasedIcon} alt="" width={50} />
                            <p>purchased successfully</p>

                        </section>
                    </section>
                ) : ""
            }
        </section>
    );
};

export default Redirect_Store_ShopCart;