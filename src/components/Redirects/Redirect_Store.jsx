// import the api of artGallery
import { useEffect, useState, createContext, useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { FetchApi } from "../../../services/ArtGalleryApi";
import 'react-loading-skeleton/dist/skeleton.css';
import Redirect_Store_Product from "../shared/Redirect_Store_Product";
import Redirect_Store_Navbar from "../shared/Redirect_Store_Navbar";
import searchIcon from "../../assets/images/redirec_store_Image/magnifying-glass.svg";
// import react skeleton 
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import Styles from "../../Styles/Redirect_Store.module.css";
import CloseIcon from "../../assets/images/Redirect_Store/xmark.svg";

import Loadin_svg from "../../assets/Loading_spinner/LoadingSvg.svg";

import Redirect_Exhibitions from "./Redirect_Exhibitions";


// import cartIcon from "../../assets/images/icon_store/cart-shopping.svg";
// import { CartContextProvider } from "../../context/Redirect_Store_CartContext";
import { ProductContextProvider } from "../../context/Rediret_Store_Product_Context_Provider";
// import { searchContextProvider } from "../shared/Redirect_Store_Navbar";
// import Redirect_Store_ShopCart from "../shared/Redirect_Store_ShopCart";
import filterIcon from "../../assets/images/Redirect_Store/sliders.svg";
import homeIcon from "../../assets/images/Redirect_Store/house.svg";
import { Redirect_Store_Context_ } from "../../context/Redirect_Store_Context";
import Redirect_Store_Product_Detail from "./Redirect_Store_Product_Detail";


export const ImageGalleryStore = createContext();
const Redirect_Store = () => {
    const [loading, setLoading] = useState(true);
    const { searchValue } = useContext(Redirect_Store_Context_);
    const products = useContext(ProductContextProvider);
    const asideStore = useRef();

    const [sortDate, setSortDate] = useState([]);
    const [search, setSearch] = useState("");
    const [isSorted, setIsSorted] = useState(false);
    const [filterClicked, setFilterClicked] = useState(false);
    const [messageNotFound, setMessageNotFound] = useState(false);
    const [closeIcon, setCloseIcon] = useState(false);

    const [priceFilter, setPriceFilter] = useState({
        price_100_200: false,
        price_200_300: false,
        price_300_400: false,
        price_400_500: false,

    })


    const [oldNewSort, setOldNewSort] = useState(false);

    const handlePriceFilter = (e) => {
        const { name, checked } = e.target;


        const updatePriceFilter = {};

        for (const key in priceFilter) {
            updatePriceFilter[key] = false;

        }
        updatePriceFilter[name] = checked;
        setPriceFilter(updatePriceFilter);

    }

    const searchProduct = (event) => {
        setSearch(event.target.value);

        // setIsSorted(false);
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

const filterProducts = () => {
        let filterProductsApi = products;

        if (priceFilter.price_100_200) {
            filterProductsApi = filterProductsApi.filter(item => item.price >= 100 && item.price <= 200)
        } else if (priceFilter.price_200_300) {
            filterProductsApi = filterProductsApi.filter(item => item.price >= 200 && item.price <= 300)
        } else if (priceFilter.price_300_400) {
            filterProductsApi = filterProductsApi.filter(item => item.price >= 300 && item.price <= 400)
        } else if (priceFilter.price_400_500) {
            filterProductsApi = filterProductsApi.filter(item => item.price >= 400 && item.price <= 500)
        }

  

        let trimming = searchValue.toLowerCase().trim();
        if (searchValue) {
            filterProductsApi = filterProductsApi.filter(item => item.artist_title?.toLowerCase().includes(trimming))
        } 

        let trim2 = search.toLowerCase().trim();
        if (search) {
            filterProductsApi = filterProductsApi.filter (item => item.artist_title?.toLowerCase().includes(trim2));
        } 
        
        if (isSorted) {
            return sortDate.filter(item => filterProductsApi.includes(item));
        }   
        
        
        return filterProductsApi;
    }
   

    const filterMenu = () => {
        setFilterClicked(true);


        document.querySelector("body").style.overflowY = "hidden";


    }

    const closeIconAside = () => {
        setFilterClicked(false);
        document.querySelector("body").style.overflowY = "auto";
    }

    const getProduct =()=>{
        if(products) {
            setLoading(false);
        }
    }


    
    
    useEffect(() => {
        getProduct();
        
        setSortDate([...products])
    }, [products, search, filterClicked])
    
    useEffect(() => {
        const filtered = filterProducts();
        // setFilteredProducts(filtered);
        setMessageNotFound(filtered.length === 0);
    }, [products, searchValue, search, priceFilter, isSorted]);
    // useEffect(() => {
        //     getProduct();
        
        //     setSortDate([...products])
        // }, [products, search, filterClicked])
        
        let productToRender = filterProducts();
    

    return (
        <section className="text-2xl">
           
            <Redirect_Store_Navbar />

            <section className=" flex justify-between gap-[50px] px-3">
                <section className={`${loading ? "w-full  mt-4 flex flex-col justify-center" : "w-full  mt-4 flex flex-col " }`}>
                {/*  */}

                                <section className="mx-8">
                                    <a onClick={sortByOldest} style={{ cursor: "pointer" }} className="mr-4">oldest</a>
                                    <a onClick={sortByNewest} style={{ cursor: "pointer" }}>newest</a>
                                </section>

                    {
                        loading ?
                    
                    <div className="mt-12 flex justify-center">
                        <img src={Loadin_svg} />
                        {/* <Skeleton width={400} height={100 } count={4}/> */}

                    </div>
                        :

                        productToRender.length === 0 ?
                            <div className="text-center mt-8">no art works found </div> :

                            <div id="redirect_store_product_wrapper" className="justify-center transition-all">
                                <div id="redirect_store">

                                    {productToRender.map(item => <Redirect_Store_Product key={item.elementId} data={item} />)}
                                </div>
                            </div>
                    }
                </section>

                <aside className={`${filterClicked ? Styles.filter : Styles.store_aside}  asideSS  right-0 `} ref={asideStore}>
                    {/* <aside className={`${Styles.store_aside}  right-0 h-fit`} ref={asideStore}> */}
                    <section className={`${Styles.aside_wrapper_input} mb-4`}>
                        <div className="flex items-center w-[250px] bg-white relative p-2 rounded" >
                            <input
                                type="text"
                                placeholder="Search for an item"
                                onChange={searchProduct}
                                className="flex-grow outline-none w-full"
                            />
                            <img src={searchIcon} alt="Search" width={20} className="ml-2  absolute right-[5%]" />
                        </div>
                    </section>
                    <section className={`${filterClicked ? Styles.priceInput_responsive : Styles.aside_wrapper_priceInput}`}>
                        {/* <section className={`${Styles.aside_wrapper_priceInput}`}> */}
                        <div className="mb-2">
                            <input
                                className="cursor-pointer mr-2"
                                name="price_100_200"
                                checked={priceFilter.price_100_200}
                                onChange={handlePriceFilter}
                                type="checkbox"
                            />
                            <label>Price 100 to 200$</label>
                        </div>
                        <div className="mb-2">
                            <input
                                className="cursor-pointer mr-2"
                                name="price_200_300"
                                checked={priceFilter.price_200_300}
                                onChange={handlePriceFilter}
                                type="checkbox"
                            />
                            <label>Price 200 to 300$</label>
                        </div>
                        <div className="mb-2">
                            <input
                                className="cursor-pointer mr-2"
                                name="price_300_400"
                                checked={priceFilter.price_300_400}
                                onChange={handlePriceFilter}
                                type="checkbox"
                            />
                            <label>Price 300 to 400$</label>
                        </div>
                        <div className="mb-2">
                            <input
                                className="cursor-pointer mr-2"
                                name="price_400_500"
                                checked={priceFilter.price_400_500}
                                onChange={handlePriceFilter}
                                type="checkbox"
                            />
                            <label>Price 400 to 500$</label>

                        </div>
                    </section>

                    <div onClick={closeIconAside} className={`${filterClicked ? "flex cursor-pointer absolute right-4 top-3" : "hidden"}`}>
                        <img src={CloseIcon} alt="" width={25} style={{color: "white", fill: "white"}} />
                    </div>

                    <section className={`${filterClicked ? "hidden" : "flex justify-evenly w-full"} `}>
                        {/* <section className="flex justify-evenly  w-full"> */}
                        <div className={`${Styles.aside_wrapper_icons}`}>
                            <Link to="/" className={`${Styles.aside_icon_description} flex items-center flex-col`}>
                            <img src={homeIcon} alt="" width={20} />
                             <span>home</span> 
                            </Link>

                        </div>
                        <div className={`${Styles.aside_wrapper_icons}`} onClick={filterMenu}>
                            <img className={Styles.aside_filterIcon}  src={filterIcon} alt="filter" width={20} style={{ height: "20px" }} />
                            <p className={`${Styles.aside_icon_description}`}>filter</p>
                        </div>
                    </section>

                </aside>
            </section>
        </section>
    );
};

export default Redirect_Store;