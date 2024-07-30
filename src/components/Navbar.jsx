//npm start
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
// import arrow from "../fontAwesome/FontAwesome.Pro.6.2.1/svgs/regular/magnifying-glass-arrow-right.svg";

// Import Start Image,Logo, Svg
import searchIcon from "../assets/search-icon/magnifying-glass.svg";
import MenuBar from "../assets/menu/bars.svg";
import Logo from "../assets/icon/40626.jpg";
// Import END Image,Logo, Svg

// START CSS Styles 
import NavStyles from "../Styles/NavbarStyles.module.css";
import SliderNavigation from "../Styles/Slider_Navigation.module.css";
// END CSS Styles 

// Importing navbar dropdown

// import menuNav from "./Menu_Nav";
import Slider_navigation from './slider_navigation';

import closeNavbarDropdown from "../assets/navbarDropdownClose/xmark.svg";
// import { usehis, useLocation } from 'react-router-dom';



const Navbar = () => {
    const listLink = useRef(null);
    const [showHeader, setShowHeader] = useState(true);
    const [isvisiii, setIsVisiiiii] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [previousScrollY, setpreviousScrollY] = useState(0);

    const headerRef = useRef(null);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > previousScrollY) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }
        setpreviousScrollY(currentScrollY);
    }


    const [showList, SetShowDisplay] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [burger, burgerSetter] = useState(false);
    const [isMenuOpened, setMenu] = useState(false);

    const closeDropDownRef = useRef(null);

    const positionHandler = () => {
        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "hidden";

        SetShowDisplay(!showList);
        setMenuClicked(true);
        burgerSetter(!burger);
        setMenu(!isMenuOpened);
        const navJsElement = document.querySelector(`.${SliderNavigation.slider_navigation}`);
        if (navJsElement) {
            navJsElement.style.zIndex = "0";
        }
        const Remover = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`);
        if (Remover) {
            Remover.style.display = "none";
        }

    }

    const CloseDropDownHandler = () => {
        const navbar_list = document.querySelector(`.${NavStyles.navbar_list}`);
        navbar_list.style.display = "none";

        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "visible";

        SetShowDisplay(false);
        burgerSetter(!burger);

    }


    const [isPageLoaded, setIsPageLoaded] = useState(true);

    const close_clickHandler = (event) => {

        if (closeDropDownRef.current && closeDropDownRef.current.contains(event.target)) {

            console.log("IS CLICKING")
        }
        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "visible";
        setMenuClicked(false);
    }

    const [visibility, setVisibility] = useState(false);

    const handleItemOverflow = (path) => {
        if (location.pathname === path) {
            console.log("yes it is ")
            setMenuClicked(false)
        }

        setVisibility(true)
        if (visibility) {
            console.log("is treuuuuuuuuuuuuuu")
        }
        document.body.style.overflow = "visible";
    }

    const mouseii = () => {
        const dropdown = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`)
        if (!isMenuClicked) {
            if (dropdown) {
                dropdown.style.display = "flex";
            }
        } else if (isMenuClicked) {
            if (dropdown) {
                dropdown.style.display = "none";
            }
        }
    }

    if (isMenuClicked) {
        const dropdown = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`)
        if (dropdown) {
            dropdown.style.display = "none";
        }
    }

    const mouseleavii = () => {
        const dropdown = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`)
        if (dropdown) {
            dropdown.style.display = "none";
        }
    }

    useEffect(() => {
        const dropdown = document.querySelector(`.${NavStyles.item__dropdown__wrapper}`)
        if (isMenuClicked) {
            dropdown.style.display = "none"
        }
        if (isMenuClicked === false) {

            if (dropdown) {
                dropdown.addEventListener("mouseenter", mouseii)
                dropdown.addEventListener("mouseleave", mouseleavii)
                dropdown.style.animation = `${NavStyles.showUp} 0.5s 1`;
            }
        }

        const isReloaded = sessionStorage.getItem("isReloaded");
        if (isReloaded) {
            setIsPageLoaded(true);
            sessionStorage.removeItem("isReloaded");
        } else {
            setIsPageLoaded(false);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [previousScrollY, isMenuClicked]);

    return (
        <>

            <header id="header" className={` ${NavStyles.isHeader} ${isPageLoaded ? NavStyles["fade-out"] : scrollingDown ? NavStyles["fade-out"] : NavStyles["fade-in"]}`} ref={headerRef} >
                <section style={{ display: "none" }}>
                    <img src={MenuBar} alt="" width={30} />
                </section>

                <section id={NavStyles.logo}>
                    <Link to="/"><img src={Logo} alt="" width={50} /></Link>

                </section>

                <section className='wrappriO'>

                    <img style={{ display: "none" }} onClick={CloseDropDownHandler} id={NavStyles.navbar__closeDropDown} src={closeNavbarDropdown} alt="" />
                    <span onClick={close_clickHandler} ref={closeDropDownRef} className={isMenuClicked ? 'showClose' : "hidden"}>close</span>
                    <ul className={`${isMenuClicked ? "firsul_cls" : "wrappri"}`} >
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/artists")} > <Link to="/artists">Artists</Link> </li>
                        <li className={`${NavStyles.Exhibitions__dropper} list_item mx-2 `}>

                            <Link id="exeption" onMouseOver={mouseii} onMouseOut={mouseleavii} ref={listLink} style={{ cursor: "pointer" }} onClick={()=> handleItemOverflow("/Exhibitions")} className={`${NavStyles.list_item}`} to="/Exhibitions">Exhibitions</Link>
                            <ul style={{ display: isMenuClicked ? "none" : "none", cursor: 'pointer' }} className={`${NavStyles.item__dropdown__wrapper}`} >
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsCurrent">Current</Link></li>
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsForthcoming">Forthcoming</Link></li>
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsArchive">Archive</Link></li>
                            </ul>
                        </li>

                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/Web3")} > <Link to="/Web3">Web3</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/Voices")} > <Link to="/Voices">Voices</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/Store")} > <Link to="/Store">Store</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/News")} > <Link to="/News">News</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/About")} > <Link to="/About">About</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} onClick={()=>handleItemOverflow("/Contact")} > <Link to="/Contact">Contact</Link> </li>
                    </ul>

                </section>
                <section id={NavStyles.search_signup} >
                    <section onClick={positionHandler} className="search_signup_menu"> Menu </section>

                    

                    <div className={NavStyles.signup}> <Link to="/SignUp">Sign Up</Link> </div>
                </section>

            </header>
        </>
    );
};

export default Navbar;