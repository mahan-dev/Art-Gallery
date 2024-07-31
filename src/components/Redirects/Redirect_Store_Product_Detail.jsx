import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContextProvider } from '../../context/Rediret_Store_Product_Context_Provider';
import Styles from "../../Styles/Redirect_Store_Product_Detail.module.css";

import Skeleton from 'react-loading-skeleton';

const Redirect_Store_Product_Detail = () => {
    const { id } = useParams();

    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);

    const product = useContext(ProductContextProvider);
    const products = product[id - 1];

    const description = products?.description || 'no description ...';
    const artist_title = products?.artist_title || "not found";

    const ImageProduct = () => {
        if (products && products.image_id) {
            setImage(`https://www.artic.edu/iiif/2/${products.image_id}/full/1686,/0/default.jpg`);
            setLoading(false);
        }
    }

    useEffect(() => {
        ImageProduct()
    }, [products]);

    return (
        <section className=''>
            <section className={`${Styles.product_wrapper} bg-[#D4D4D4] w-full h-fit`}>
                <section className={Styles.wrapper_product}>
                    <p> {loading ? <Skeleton width={100} /> : `artist: ${artist_title}`}</p>

                    {loading ? (
                        <Skeleton height={300} width={300} />
                    ) : (
                        
                        <div className=' h-[250px] mb-6' style={{display : loading ? 'none' : "block"}} >
                        <img src={image} style={{ borderRadius: "3px", objectFit: "cover", height: "100%" }} alt="Product" width={300} />
                        </div>
                    )}
                    
                    <p className='max-w-[500px]'>{loading ? <Skeleton count={3} /> : description}</p>
                </section>
            </section>

        </section>
    );
};

export default Redirect_Store_Product_Detail;