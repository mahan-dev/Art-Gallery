import React from 'react';
import imgCurrent from "../../assets/images/redirectVoices-images/first_slide.jpg";
import Styles from "../../Styles/NftImages.module.css";

const NftImages = ({ data }) => {
    // console.log(data)
    const { price, image, title } = data;
    // console.log()
    let ethLatestPrice = Number(localStorage.getItem("eth"));
    let totalPriceDollar = ethLatestPrice * price;
    let formattedPrice = Number(totalPriceDollar) % 1 === 0 ? Number(totalPriceDollar).toFixed(0) : Number(totalPriceDollar).toFixed(2);
    // console.log(ethLatestPrice)
    return (
        <div className={`${Styles.containerNftImages} `}>
            <div className={`${Styles.wrapperImageNft}`}>
                <img className={`${Styles.imageNft}`} src={image} alt="" />
            </div>
            <div className='flex flex-col '>
                <p className='my-2'>{title}</p>
                <div className='flex gap-4'>

                <p>{price} ETH</p>
                <p className={`${Styles.priceFormatted} text-[#989898]`}>(${formattedPrice})</p>
                </div>
            </div>
        </div>
    );
};

export default NftImages;