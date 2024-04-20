// const isInCart = (state, elementId) => {
//     const result = !!state.selectedItems.find(item => item.elementId === elementId);
//     return result;
// }

// const quantityCounter = (state, elementId) => {
//     const items = state.selectedItems.findIndex(item => item.elementId === elementId);
//     // console.log(state.selectedItems.quantity)
//     if (items === -1) {
//         return 0;
//     } else {
//         return state.selectedItems[items].quantity;
//     }
// }
const isInCart = (state, elementId) => {
    // const result = !!state.selectedItems.find(item => item.elementId === elementId);
    // return result;
    return state.selectedItems.some(item => item.elementId === elementId)
}
const quantityCounter = (state, elementId) => {
    const items = state.selectedItems.findIndex(item => item.elementId === elementId);
    if(items === -1) {
        return 0
    }
    else{
        return state.selectedItems[items].quantity;
    }
}

export { isInCart, quantityCounter };