import React, { useContext } from 'react';
import { CartContextProvider } from '../../context/Redirect_Store_CartContext';
import Redirect_Store_Card from './Redirect_Store_Card';
import Redirect_Store_Product from './Redirect_Store_Product';
import { Link } from 'react-router-dom';

const Redirect_Store_ShopCart = ({ data }) => {
    const { state, dispatch } = useContext(CartContextProvider);
    const { total, checkout } = state;


    // const {state, dispatch} = useContext(CartContextProvider)
    return (
        <div className='mx-4'>
            {state.selectedItems.map(item => <Redirect_Store_Card key={item.elementId} data={item} />)}
            {state.itemsCounter > 0 ?

                (<div> you've chosen : {state.itemsCounter} products </div>) :
                !(state.itemsCounter > 0) && !checkout ?
                    (<div>your'e card is empty</div>) : ""
            }

            {total > 0 ?
                (<div>
                    <button className='mr-4' onClick={() => dispatch({ type: "Checkout", payload: data })} >Checkout</button>
                    <button onClick={() => dispatch({ type: "Clear", payload: data })}>clear</button>
                    <p>your'e total price is : ${total}</p>
                </div>) : ""

            }
            {!total > 0 && !checkout ?
                (<Link to="/store"> do you wanna buy something ?</Link>) : ""
            }
            {checkout ? (<p>you've purchased successfully</p>) : ""}

        </div>
    );
};

export default Redirect_Store_ShopCart;