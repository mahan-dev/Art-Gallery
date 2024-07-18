import React, { createContext, useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';

// const initialState = {
//     selectedItems: [],
//     checkout: false,
//     itemsCounter: 0,
//     total: 0,

// }
// const toys = [3, 7, 5, 2, 8]; // Numbers on your toys
// const results = toys.reduce((total, toy) => {
//   return {
//     count: total.count + 1, // Counting toys
//     totalValue: total.totalValue + toy, // Adding up values
//   };
// }, { count: 0, totalValue: 0 });
// console.log(results.count); // How many toys you have
// console.log(results.totalValue); // Total value of your toys


// let price = 218;
// const sumItems = item => {
//     const itemCounter = item.reduce((total, product) => total + product.quantity, 0);
//     // const total = item.reduce((total, product) => total + price * product.quantity, 0);
//     return {  itemsCounter: itemCounter  }

// }

// const CartReducer = (state, action) => {

//     switch (action.type) {

//         // case "set_ContentNumber": {
//         //     const { elementId } = action.payload;

//         //     // Save the elementId to localStorage
//         //     localStorage.setItem('elementId', elementId.toString());

//         //     return {
//         //         ...state,
//         //         elementId,
//         //     };
//         // }


//         // case "set_cart_state": {
//         //     return {
//         //         ...state,
//         //         ...action.payload,
//         //     };
//         // }


//         case "set_DisplayCount" : {
//             return{
//                 ...state,
//                 ...action.payload
//             }
//         }

//         case "Add_Item": 
//             if (!state.selectedItems.find(item => item.elementId === action.payload.elementId)) {
//                 state.selectedItems.push({
//                     ...action.payload,
//                     quantity: 1,

//                 })
//             }
//             return {
//                 ...state,
//                 selectedItems: [...state.selectedItems],
//                 ...sumItems(state.selectedItems),
//                 checkout: false,
//             }
//         case "Remove_Item": {

//             const newSelectedItems = state.selectedItems.filter(item => item.elementId !== action.payload.elementId)
//             console.log(newSelectedItems);
//             return {
//                 ...state,
//                 selectedItems: [...newSelectedItems],
//                 ...sumItems(newSelectedItems)

//             }
//         }

//         case "Increase":
//             {

//                 const Increasing = state.selectedItems.findIndex(item => item.elementId === action.payload.elementId)
//                 state.selectedItems[Increasing].quantity++;
//                 return {
//                     ...state,
//                     ...sumItems(state.selectedItems),
//                 }
//             }
//         case "Decrease":
//             {

//                 const Decreasing = state.selectedItems.findIndex(item => item.elementId === action.payload.elementId)
//                 state.selectedItems[Decreasing].quantity--;
//                 return {
//                     ...state,
//                     ...sumItems(state.selectedItems)
//                 }
//             }
//         default: 
//         return state;

//     }
// }

const sumItems = item => {
    const itemsCounter = item.reduce((total, product) => total + product.quantity, 0)
    const total = item.reduce((total, product) => total + product.quantity * product.price, 0)
    console.log(total);
    return { itemsCounter, total }
}

const CartReducer = (state, action) => {
    switch (action.type) {

        case "Increase": {
            const indexI = state.selectedItems.findIndex(item => item.elementId === action.payload.elementId)
            state.selectedItems[indexI].quantity++
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
            
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        }

        // case "set_ContentNumber": {
        //     const { elementId, value } = action.payload;
        //     const updatedContent = state.selectedItems.map(item => {
        //         if (item.elementId === elementId) {
        //             return {
        //                 ...item,
        //                 quantity: value,
        //             };
        //         }
        //         return item;
        //     });

        //     // Update the selectedItems and save elementId to the cookie
        //     Cookies.set('elementId', elementId, { expires: 7 });

        //     return {
        //         ...state,
        //         selectedItems: updatedContent,
        //     };
        // }

        /*

        should Consider this code to rePractice On It !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        case "set_Quantity": {
            const { elementId, quantity } = action.payload;
            const updatedItems = state.selectedItems.map(item => {
                if (item.elementId === elementId) {
                    return {
                        ...item,
                        quantity: quantity,
                    };
                }
                return item;
            });

            return {
                ...state,
                selectedItems: updatedItems,
                checkout: false,
            };
        }
*/
        // case "Increase": {
        //     const { elementId } = action.payload;

        //     const updatedItems = state.selectedItems.map(item =>
        //         item.elementId === elementId ? { ...item, quantity: item.quantity + 1 } : item
        //         );
        //         return {
        //             ...state,
        //             selectedItems: updatedItems,
        //         ...sumItems(updatedItems)
        //     };
        // }


        case "Decrease": {
            const indexD = state.selectedItems.findIndex(item => item.elementId === action.payload.elementId)
            state.selectedItems[indexD].quantity--
            return {
                ...state,
                ...sumItems(state.selectedItems)

            }
        }

        case "Clear": {
            return {
                total: 0,
                selectedItems : [],
                checkout : false,
                itemsCounter : 0,
            }
        }


        case "AddCard": {
            const existingItemIndex = state.selectedItems.findIndex(item => item.elementId === action.payload.elementId)
            localStorage.setItem('itemsCounter', state.itemsCounter.toString());
            if (existingItemIndex !== -1) {
                state.selectedItems[existingItemIndex].quantity++
            } else {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                });
            } return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
            // if (!state.selectedItems.find(item => item.elementId === action.payload.elementId)){

            //     state.selectedItems.push({
            //         ...action.payload,
            //         quantity: 1,

            //     })
            // }
            // return {
            //     ...state,
            //     selectedItems : [...state.selectedItems],
            //     ...sumItems(state.selectedItems),
            //     checkout: false
            // }
        }
        case "Remove": {
            const newselected = state.selectedItems.filter(item => item.elementId !== action.payload.elementId)
            return {
                ...state,
                selectedItems: [...newselected],
                ...sumItems(newselected)

            }
        }
        case "Checkout" : {
            return {
                selectedItems: [],
                itemsCounter: 0,
                total :0,
                checkout: true,
            }
        }


        default: return state;
    }

}


export const CartContextProvider = createContext();

const Redirect_Store_CartContext = ({ children }) => {
    const storedState = JSON.parse(localStorage.getItem('cartState'));
    const initialState = storedState || {
      selectedItems: [],
      itemsCounter: 0,
      total: 0,
      checkout: false,
    };
    const [state, dispatch] = useReducer(CartReducer, initialState);
    useEffect(()=>{
        localStorage.setItem('cartState', JSON.stringify(state));
    }, [state])
 
    return (
        <div>
            <CartContextProvider.Provider value={{ state, dispatch }}>
                {children}
            </CartContextProvider.Provider>
        </div>
    )


};
export default Redirect_Store_CartContext;
export {sumItems};
// const [state, dispatch] = useReducer(CartReducer, initialState);
// // const contextValue= {state, dispatch};
// useEffect(() => {
//     // localStorage.setItem()
//     localStorage.setItem('itemsCounter', state.itemsCounter.toString());
// }, [state.itemsCounter]);
// return (
//     <div>
//         <CartContextProvider.Provider value={{state, dispatch}}>
//             {children}

//         </CartContextProvider.Provider>
//     </div>
// );
