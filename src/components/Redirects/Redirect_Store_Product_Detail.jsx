import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContextProvider } from '../../context/Rediret_Store_Product_Context_Provider';
import Styles from "../../Styles/Redirect_Store_Product_Detail.module.css";

import Skeleton from 'react-loading-skeleton';

const Redirect_Store_Product_Detail = () => {
    const { id } = useParams();

    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(data.image_id)


    const product = useContext(ProductContextProvider);
    // const products = product[id-1];
    const products = product[id - 1];

    // const {artist_title}  = products
    const description = products?.description || 'no description ...';
    const artist_title = products?.artist_title || "not found";



    // const displayCreditLine = credit_line || 'Nothing to show';



    // const { artist_id } = products;
    // const { artist_id = 'No artist ID available', image_id = 'No image ID available' } = products || {};

    const ImageProduct = () => {
        if (products && products.image_id) {
            setImage(`https://www.artic.edu/iiif/2/${products.image_id}/full/1686,/0/default.jpg`);
            setLoading(false);
            // setass(credit_line);
        }

    }
    useEffect(() => {
        ImageProduct()
    }, [products]);

    // if (!products) {
    //     return <div>Loading...</div>;
    // }


    return (
        <section className='bg-stone-600 w-full h-full'>
        <section className={Styles.product_wrapper}>
            <section className={Styles.wrapper_product}>
                <p> {loading ? <Skeleton width={100} /> : `artist: ${artist_title}`}</p>
               
                {loading ? (
                    <Skeleton height={300} width={300} />
                ) : (
                    <img src={image} alt="Product" width={300} />
                )}
                <p className='max-w-[500px]'>{loading ? <Skeleton count={3} /> : description}</p>
            </section>
        </section>
    </section>
    );
};

export default Redirect_Store_Product_Detail;