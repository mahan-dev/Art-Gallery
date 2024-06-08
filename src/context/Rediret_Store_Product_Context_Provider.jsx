import React, { Children, createContext, useEffect, useState } from 'react';
import { FetchApi , FetchApi2} from '../../services/ArtGalleryApi';
import { CartContextProvider } from './Redirect_Store_CartContext';
export const ProductContextProvider = createContext();
const Rediret_Store_Product_Context_Provider = ({ children }) => {
   
    
    const [imageGallery, setImageGallery] = useState([]);
    const [imageGallery2, setImageGallery2] = useState([]);

    const basePrice = 50;
    const increamentPrice = 50;
    useEffect(() => {
        const GetFetchApi = async () => {
            const dataList = await FetchApi2();
            
            setImageGallery(dataList.data.map((record,index)=>({...record,elementId: index+1, price: basePrice + (index * increamentPrice)})));
        }
        GetFetchApi();

    }, []);
  

    return (
        
        <div>
            <ProductContextProvider.Provider value={imageGallery}>
                {children}
            </ProductContextProvider.Provider>

        </div>
    );
};

export default Rediret_Store_Product_Context_Provider;