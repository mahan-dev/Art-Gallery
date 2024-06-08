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
import searchIcon from "../../assets/images/redirec_store_Image/magnifying-glass.svg";



import cartIcon from "../../assets/images/icon_store/cart-shopping.svg";
import { CartContextProvider } from "../../context/Redirect_Store_CartContext";
import { ProductContextProvider } from "../../context/Rediret_Store_Product_Context_Provider";
import Redirect_Store_ShopCart from "../shared/Redirect_Store_ShopCart";

export const ImageGalleryStore = createContext();
const Redirect_Store = ({ children }) => {
    const { state } = useContext(CartContextProvider);
    const products = useContext(ProductContextProvider);
    console.log(products)
    // console.log(products)
    const [sortDate, setSortDate] = useState([]);
    const [search, setSearch] = useState("");
    const [isSorted, setIsSorted] = useState(false);

    // This UseState Is for Checked Button !!!

    const [priceFilter, setPriceFilter] = useState({
        price_100_200: false,
        price_200_300: false,
        price_300_400: false,
        price_400_500: false,

    })



    // const [isSorted, setIsSorted] = useState(false);
    // const StateChanger = state.selectedItems.map(item => {
    //     return item;
    // })

    const [productz, setProductz] = useState([]);
    const [checkboxE, SetCheckboxE] = useState([]);
    const [oldNewSort, setOldNewSort] = useState(false);

    const [filterProductsFixing, setFilteredProductsFixing] = useState([])
    const handlePriceFilter = (e) => {
        const { name, checked } = e.target;
        SetCheckboxE(e.target);

        const updatePriceFilter = {};

        for (const key in priceFilter) {
            updatePriceFilter[key] = false;
            console.log(updatePriceFilter)

        }

        updatePriceFilter[name] = checked;
        setPriceFilter(updatePriceFilter);


        if (checked) {

            // if (priceFilter.price_100_200) {
            //     filterProducts = filterProducts.filter(item => item.price >= 100 && item.price <= 200)
            // } else
             if (priceFilter.price_200_300) {
                filterProducts = filterProducts.filter(item => item.price >= 200 && item.price <= 300)
            } else if (priceFilter.price_300_400) {
                filterProducts = filterProducts.filter(item => item.price >= 300 && item.price <= 400)
            } else if (priceFilter.price_400_500) {
                filterProducts = filterProducts.filter(item => item.price >= 400 && item.price <= 500)
            }
            // console.log("wqjnfpqwidhn")

            // const productz = products.filter(item => item.price >= 100 && item.price <= 200)
            // setProductz(productz)
            // const ItemsProduct = [...products].map(item => item.price);

            // if(products.price > 100 < 200){
            //     const prices = [...products].price;
            //     console.log(prices);
            // }
            // console.log(ItemsProduct)
        } else { console.log(checked, "that's not true man!!!") }
    }

    const searchProduct = (event) => {
        setSearch(event.target.value.toLowerCase());
        setIsSorted(false);
    }

    const sortByNewest = () => {
        const sorted = [...products].sort((a, b) => new Date(b.date_end) - new Date(a.date_end));
        setOldNewSort(true);
        setSortDate(sorted);
        setIsSorted(true);
    };
    const sortByOldest = () => {
        const sorted = [...products].sort((a, b) => new Date(a.date_end) - new Date(b.date_end));
        setOldNewSort(false)
        setSortDate(sorted);
        setIsSorted(true)
    };

    let filterProducts = products;

    const filterAndSortProducts = () => {
        // if (item.artist_title && item.artist_title.toLowerCase().includes(search)) {
        //     conso

        //     return true;
        // }
        
        if (priceFilter.price_100_200) {
            filterProducts = filterProducts.filter(item => item.price >= 100 && item.price <= 200)
        } else if (priceFilter.price_200_300) {
            filterProducts = filterProducts.filter(item => item.price >= 200 && item.price <= 300)
        } else if (priceFilter.price_300_400) {
            filterProducts = filterProducts.filter(item => item.price >= 300 && item.price <= 400)
        } else if (priceFilter.price_400_500) {
            filterProducts = filterProducts.filter(item => item.price >= 400 && item.price <= 500)
        }

        // setFilteredProductsFixing(filterProducts)

        if (oldNewSort) {
            filterProducts = [...filterProducts].sort((a, b) => new Date(b.date_end) - new Date(a.date_end))
        } else if (!oldNewSort) {
            filterProducts = [...filterProducts].sort((a, b) => new Date(a.date_end) - new Date(b.date_end))
        }
        return filterProducts;
        // if(isSorted) {
        //     filterProducts =  [...filterProducts].sort((a,b ) => new Date(a.date_end) - new Date(b.date_end) )
        // }



    }
    const UpdateContent = filterAndSortProducts();

    // const hellothere = ()=>{
    //     if( priceFilter.price_100_200){
    //         filterProducts = filterProducts.filter(item => item.price  >= 100 && item.price <= 200)

    //         return filterProducts;
    //     }
    // }

    const sector = products.filter(item => {

        

        // Check if the search query is empty
        if (search.trim() === "" || search.trim() !== "" && item.artist_title !== "" && item.artist_title.toLowerCase().includes(search)) {
            if (item.price && priceFilter.price_100_200 ) {
                return item.price >= 100 && item.price <= 200;

            } else if (item.price && priceFilter.price_200_300 ) {
                return item.price >= 200 && item.price <= 300;

            }
            else if (item.price && priceFilter.price_300_400 ) {
                return item.price >= 300 && item.price <= 400;

            }
            else if (item.price && priceFilter.price_400_500 ) {
                return item.price >= 400 && item.price <= 500;

            }
          
            return true;
           
            
            // Return all products when the search query is empty
            // return true;
        }
        

        // If item has an artist_title and includes the search query, include it
        let trimming = search.trim();
        if (item.artist_title && item.artist_title.toLowerCase().includes(search)) {
            console.log("we;kfj")
            console.log("efew")
            if (search != search.toLowerCase()) {
                search.toLowerCase();
            }
            console.log("hey man there's nothing to showing to you sorry n!!....")

            return true;
        }
        // const CondtionInput = 

        if (item.artist_title && item.artist_title.toLowerCase().includes(trimming)) {
            console.log("lkisdfhfgl")

            // if(search.trim() && item.artist_title.includes(search)){
            //     console.log("yeah is working")
            // }
            // console.log("hey man there's nothing to showing to you sorry!!....")
            return true;
        } else {
            console.log("else running !!")
        }

        // if(!isSorted && item.artist_title ||){
        //     if( priceFilter.price_100_200){
        //         filterProducts = filterProducts.filter(item => item.price  >= 100 && item.price <= 200)
        //     }
        //     return filterProducts
        // } else (console.log("is not "))

        // If there is no artist_title and no search query match, exclude the item
        return false;

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
        filterAndSortProducts();
        setSortDate([...products])
    }, [products, search])
    // const productsToRender = isSorted ? sortDate : sector;
    const productsToRender = isSorted ? UpdateContent : sector;


    // if(isSorted) {
    //     console.log("sooooooooorted")
    // }
    // if(!isSorted) {
    //     console.log("is noooooooooooooooooooooooooot       sooooooooorted")
    // }
    return (
        <section className="text-2xl">

            <Redirect_Store_Navbar />

            {/* {i should grab date_end   */}
            <section className="flex px-3">
                <section>
                    <section>
                        <a onClick={sortByOldest} style={{ cursor: "pointer" }} className="mr-4">oldest</a>
                        <a onClick={sortByNewest} style={{ cursor: "pointer" }}>newest</a>
                    </section>


                    {products.length === 0 ?
                        <div><img src={GiphLoading} alt="" style={{ border: "none", background: "transparent" }} /></div> :

                        products.length === 0 ?
                            <div>no art works found </div> :

                            <div className=" justify-center  transition-all w-full">
                                <div className=" w-full flex gap-8 flex-wrap justify-center ">
                                    {productsToRender.map(item => <Redirect_Store_Product key={item.elementId} data={item} />)}
                                </div>
                            </div>
                    }
                </section>

                <aside className=" px-4  store_aside w-[400px]">
                    <section className="fixed">
                        <section className=" sticky top-4">
                            <div className="flex bg-white items-center">
                                <input type="text" placeholder="search for an item" onChange={searchProduct} className="outline-none relative" />
                                <img className=" absolute right-0" src={searchIcon} alt="" width={15} />

                            </div>

                        </section>

                        <section>
                            <div className="flex gap-[0, 2rem]">
                                <input className="cursor-pointer" name="price_100_200" checked={priceFilter.price_100_200} onChange={handlePriceFilter} type="checkbox" id="" />
                                <p>price 100 to 200$</p>
                            </div>

                            <div className="flex gap-[0, 2rem]">
                                <input className="cursor-pointer" name="price_200_300" checked={priceFilter.price_200_300} onChange={handlePriceFilter} type="checkbox" id="" />
                                <p>price 200 to 300$</p>
                            </div>

                            <div className="flex gap-[0, 2rem]">
                                <input className="cursor-pointer" name="price_300_400" checked={priceFilter.price_300_400} onChange={handlePriceFilter} type="checkbox" id="" />
                                <p>price 300 to 400$</p>
                            </div>

                            <div className="flex gap-[0, 2rem]">
                                <input className="cursor-pointer" name="price_400_500" checked={priceFilter.price_400_500} onChange={handlePriceFilter} type="checkbox" id="" />
                                <p>price 400 to 500$</p>
                            </div>

                        </section>

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