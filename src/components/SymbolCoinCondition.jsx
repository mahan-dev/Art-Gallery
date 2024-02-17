import React from 'react';

// const Filter = (coin) => {
//     const receive = coin.includes("btc");
//     console.log(receive);
// }
// Filter();


const SymbolCoinCondition = ({ sibling }) => {
    const shouldShow = sibling === "btc";
    return (
        <div>
            {shouldShow &&  <img src={shouldShow} alt="crypto" />}
        </div>
    )
};
// SymbolCoinCondition.propTypes = {
//     sibling: PropTypes.string.isRequired,
// };
export default SymbolCoinCondition;