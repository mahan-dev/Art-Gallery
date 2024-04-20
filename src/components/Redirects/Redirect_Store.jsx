// import React from 'react';

// import the api of artGallery
import { useEffect, useState, createContext, useContext } from "react";
import { FetchApi } from "../../../services/ArtGalleryApi";
// import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
// import Card from "../shared/Card";
// import {CartContexts} from "../../context/CartContext";
import Redirect_Store_Product from "../shared/Redirect_Store_Product";
import Redirect_Store_Navbar from "../shared/Redirect_Store_Navbar";


import GiphLoading from "../../assets/Giph/redirect_store_gif/giphy_2.gif";



import cartIcon from "../../assets/images/icon_store/cart-shopping.svg";
import { CartContextProvider } from "../../context/Redirect_Store_CartContext";
import { ProductContextProvider } from "../../context/Rediret_Store_Product_Context_Provider";
import Redirect_Store_ShopCart from "../shared/Redirect_Store_ShopCart";

export const ImageGalleryStore = createContext();
const Redirect_Store = ({ children }) => {
    const { state } = useContext(CartContextProvider);
    const products = useContext(ProductContextProvider);
    const [sortDate, setSortDate] = useState([]);
    const [search, setSearch] = useState("");
    const [isSorted, setIsSorted] = useState(false);
    // const [isSorted, setIsSorted] = useState(false);
    // const StateChanger = state.selectedItems.map(item => {
    //     return item;
    // })

    const searchProduct = (event) => {
        setSearch(event.target.value);
        setIsSorted(false);
    }

    const sortByOldest = () => {
        const sorted = [...products].sort((a, b) => new Date(a.date_end) - new Date(b.date_end));
        setSortDate(sorted);
        setIsSorted(true)
    };

    const sortByNewest = () => {
        const sorted = [...products].sort((a, b) => new Date(b.date_end) - new Date(a.date_end));
        setSortDate(sorted);
        setIsSorted(true);
        
    };
    //     const selectedts = products.map(item => item.date_end);
    // selectedts.sort((a, b) =>new Date(b) - new Date(a));
    // console.log(selectedts);

    const sector = products.filter(item => {


        // if (!item.artist_title){
        //     return true;
        // }





        // Check if the search query is empty
        if (search.trim() === "") {
            // Return all products when the search query is empty
            return true;
        }

        // If item has an artist_title and includes the search query, include it
        if (item.artist_title && item.artist_title.toLowerCase().includes(search)) {
            return true;
        } else if ( !(item.artist_title && item.artist_title.includes(search))) {
            console.log("hey man there's nothing to showing to you sorry!!....")
        }

        // If there is no artist_title and no search query match, exclude the item
        return false;

        // Henri Matisse
        // Henry Matisse



        // if(item.artist_title && item.artist_title.includes(search)){
        //     return item.artist_title && item.artist_title.includes(search)
        // }
        // if (!item.artist_title ){
        //     return !item.artist_title ;
        // }else{return false}
        // return item.artist_title && item.artist_title.includes(search)

    }
    );


    useEffect(() => {
        setSortDate([...products])
    }, [products])
    // const productsToRender = isSorted ? sortDate : sector;
    const productsToRender = isSorted ? sortDate : sector;
    return (
        <section>

            <Redirect_Store_Navbar />

            {/* {i should grab date_end   */}
            <section className="flex px-3">
                <section>
                    <section>
                        <a onClick={sortByOldest} style={{ cursor: "pointer"}} className="mr-4">oldest</a>
                        <a onClick={sortByNewest} style={{ cursor: "pointer"}}>newest</a>
                    </section>


                    {products.length === 0 ?
                    <div><img src={GiphLoading} alt="" style={{border : "none", background: "transparent"}}/></div> :
                    
                    products.length === 0 ?
                    <div>no art works found </div> :
                    
                    
                        <div className=" justify-center  transition-all w-full">
                            {/* {imageGallery.map((record, index) => <Redirect_Store_Product key={index} data={{ ...record, elementId: index + 1 , StateChanger}} />)} */}
                            <div className=" w-full flex gap-8 flex-wrap justify-center ">

                            {/* {products.map(item => <Redirect_Store_Product key={item.elementId} data={item} />)} */}
                            {productsToRender.map(item => <Redirect_Store_Product key={item.elementId} data={item} />)}
                            </div>
                            {/* {products.map(item => <Redirect_Store_ShopCart key={item.elementId} data={item} /> )} */}
                            {/* {console.log(state.selectedItems)} */}
                            {/* {productsToRender.map(item => <Redirect_Store_Product key={item.elementId} data={item} />)} */}

                        </div>

                        
                }
                </section>

                <aside className=" -order-1 px-4  sticky  store_aside">
                    <section className=" sticky top-4">
                        <input type="text" placeholder="search for an item" onChange={searchProduct} className="outline-none" />
                        
                    </section>

                </aside>
            </section>

        </section>
    );
};

export default Redirect_Store;



{/* <Redirect_Store_Navbar imageGallery={imageGallery} /> */ }


//<section>
//    <h3>Shop Artworks</h3>
//    {/* this is the part for artist */}
//    <section>
//
//    </section>
//    {/* and this is for the prices !! */}
//    <section>
//        <p>Price</p>
//    </section>
//
//</section>
//<section className="">
//    {imageGallery.length === 0 ? (
//        <div>data is loading</div>
//    ) : imageGallery.records.length === 0 ? (
//        <div>No artworks found</div>
//    ) : (
//        <section className="flex flex-wrap">
//
//            {imageGallery.records.map((record, index) => (
//                <Redirect_Store_Product key={index} data={{ ...record, elementId: index + 1 }} />
//            ))}
//        </section>
//    )}
//    {console.log(imageGallery)}
//    <section>
//        <a href="$$$">Previous</a>
//        <a href="$$$">Next</a>
//    </section>
//</section>
//
//<ImageGalleryStore.Provider value={imageGallery}>
//    {children}
//</ImageGalleryStore.Provider>