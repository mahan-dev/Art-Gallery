//npm start
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
// import arrow from "../fontAwesome/FontAwesome.Pro.6.2.1/svgs/regular/magnifying-glass-arrow-right.svg";

// Import Start Image,Logo, Svg
import searchIcon from "../assets/seach-icon/magnifying-glass.svg";
import MenuBar from "../assets/menu/bars.svg";
import Logo from "../assets/icon/40626.jpg";
// Import END Image,Logo, Svg

// START CSS Styles 
import NavStyles from "../Styles/NavbarStyles.module.css";
import SliderNavigation from "../Styles/Slider_Navigation.module.css";
// END CSS Styles 

// Importing navbar dropdown
import navbarDropdown from './navbar_dropdown';
// import menuNav from "./Menu_Nav";
import Slider_navigation from './slider_navigation';
import Navbar_dropdown from "./navbar_dropdown"

import closeNavbarDropdown from "../assets/navbarDropdownClose/xmark.svg";

// Importing api


const Navbar = () => {
    const [showHeader, setShowHeader] = useState(true);
    const [scrollYS, setScrollY] = useState(0);
    const [isvisiii, setIsVisiiiii] = useState(true);
    //scrollssss
    const [scrollingDown, setScrollingDown] = useState(false);
    const [previousScrollY, setpreviousScrollY] = useState(0);
    //

    //
    const headerRef = useRef(null);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > previousScrollY) {
            setScrollingDown(true);
            // console.log(currentScrollY);
        } else {
            setScrollingDown(false);
            // console.log(currentScrollY);
        }
        setpreviousScrollY(currentScrollY);
    }


    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const [showList, SetShowDisplay] = useState(false);
    const [isMenuClicked, setMenuClicked] = useState(false);
    const [burger, burgerSetter] = useState(false);
    const [isMenuOpened, setMenu] = useState(false);
    const [closeMenu, setCloseMenu] = useState(true);

    const closeDropDownRef = useRef(null);


    const positionHandler = () => {
        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "hidden";

        SetShowDisplay(!showList);
        setMenuClicked(!isMenuClicked);
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
    // const linkColor = !isMenuClicked ? "white" : "black";
    const CloseDropDownHandler = () => {
        const navbar_list = document.querySelector(`.${NavStyles.navbar_list}`);
        navbar_list.style.display = "none";

        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "visible";

        SetShowDisplay(false);

        burgerSetter(!burger);

    }

    const closeHandler = (event) => {
        let checks = event.target;
        const refed = closeDropDownRef.current;
        if (refed && !refed.current) {
            console.log("is truinisdnfishiokfhs")
        }
        else {
            console.log("lksdhfklshdf");
        }

        const HtmlBodyScrollHidden = document.querySelector("body");
        HtmlBodyScrollHidden.style.overflow = "visible";
        setMenuClicked(!isMenuClicked);
    }


    useEffect(() => {

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    }, [previousScrollY]);
  

 
    return (
        <>
        
            <header id="header" className={`${NavStyles.isHeader} ${scrollingDown ? NavStyles["fade-out"] : NavStyles["fade-in"]}`} ref={headerRef} >
                <section style={{ display: "none" }}>
                    <img src={MenuBar} alt="" width={30} />
                </section>
                <Navbar_dropdown toggelListItem={!showList} />
                {/* <i className="fa-regular fa-magnifying-glass" style={{width: "50px", color: 'black'}} ></i> */}
                {/* <img src={arrow} alt="arrow" width={15} /> */}
                <section id={NavStyles.logo}>
                    <Link to="/"><img src={Logo} alt="" width={50} /></Link>

                </section>
                {/* <section className='@screen custom-md-max:hidden'> */}
                {/* id={NavStyles.navbar} */}
                {/* <MenuAction style={{ display: showList ? "flex" : '' }}> */}
                {/* id={NavStyles.navbar_list}*/}
                {/* className={NavStyles.activer} */}
                {/* ${NavStyles.activer} */}
                {/* <section>
                        </section> */}
                {/* <ul className={` flex ${NavStyles.navbar_list} ${isMenuOpened ? NavStyles.activer : ""} `} ></ul> */}
                <section className='wrappriO'>

                    <img style={{ display: "none" }} onClick={CloseDropDownHandler} id={NavStyles.navbar__closeDropDown} src={closeNavbarDropdown} alt="" />
                    <span onClick={closeHandler} ref={closeDropDownRef} className={isMenuClicked ? 'showClose' : "hidden"}>close</span>

                    <ul className={`${isMenuClicked ? "firsul_cls" : "wrappri"}`} >
                        {/* {`${NavStyles.list_item}-${NavStyles.animLink} */}
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/artists">Artists</Link> </li>
                        <li className={`${NavStyles.Exhibitions__dropper} list_item mx-2 `}>
                            {/* exception__a */}
                            <Link id="exeption" style={{ cursor: "pointer" }} className={`${NavStyles.list_item}`} to="/Exhibitions">Exhibitions</Link> {/*need second class for hovering item link *}
                            {/* <ul className={`${NavStyles.item__dropdown__wrapper} animate`}> */}
                            <ul className={`${NavStyles.item__dropdown__wrapper}`} >
                                {/* <ul className={`${NavStyles.Exhibitions__dropper} ${disableHover ? NavStyles.disable__hover : ""}`}> */}
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsCurrent">Current</Link></li>
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsForthcoming">Forthcoming</Link></li>
                                <li className={`${NavStyles.list_item} mx-2`} ><Link to="/ExhibitionsArchive">Archive</Link></li>
                            </ul>
                        </li>
                        {/* id={NavStyles.list__item} */}
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/Art-Gallery/Web3">Web3</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/Voices">Voices</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/Store">Store</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/News">News</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/About">About</Link> </li>
                        <li className={`${NavStyles.list_item} mx-2`} > <Link to="/Contact">Contact</Link> </li>
                    </ul>

                </section>
                <section id={NavStyles.search_signup} className='elvin' >
                    <section onClick={positionHandler} id='menu_nav' className="show_hide"> Menu </section>

                    <div className={`${NavStyles.signup_search} sign2`}>
                        <img src={searchIcon} alt="searchIcon" width={20} className={showHeader ? "" : "fill-black"} />
                    </div>

                    <div className={NavStyles.signup}> <Link to="SignUp">Sign Up</Link> </div>
                </section>

            </header>
        </>
    );
};

export default Navbar;