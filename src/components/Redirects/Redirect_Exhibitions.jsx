import React, { useContext, useEffect, useRef, useState, useMemo } from 'react';
import Navbar from "../Navbar";
import image1 from "../../assets/images/artists_pics/3.jpg";
import styleExhibitions from "../../Styles/Redirect_exhibitions.module.css";
// 
import minus from "../../assets/images/minus_Icon/minus.svg";
import arrowDown from "../../assets/images/arrow_Down_Icon/chevron-down.svg";

// importing footer

import Redirect_Exhibitions_Footer from './Redirect_Exhibitions_Footer';

import styled, { keyframes } from "styled-components";
import Skeleton from 'react-loading-skeleton';
import AuthorsNames from './AuthorsNames';
import { Link, animateScroll as scroll } from "react-scroll";
import { ProductContextProvider } from "../../context/Rediret_Store_Product_Context_Provider";
import Redirect_content_Exhibitions from './Redirect_content_Exhibitions';

const translateAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateY(-10px);
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    -o-transform: translateY(-10px);
}

100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
}
`

const ListStyledComponent = styled.ul`

display: ${props => (props.open ? "none" : "block")};
position: absolute;
top: 100%;
width : 100%;
animation: ${translateAnimation} 0.5s ease-out ;
background-color: black;
li:nth-child(1){
    color: white;
}
li:nth-child(2){
    color: white;
}

`

const Redirect_Exhibitions = ({data}) => {
    const product = useContext(ProductContextProvider);

    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);

    const [icon, setIcon] = useState(true);
    const [icon2, setIcon2] = useState(true);

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("ascending");
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [scrollDown, setScrollDown] = useState(false);
    const [image, setImage] = useState([]);
    

    
    // let image_id = imagApi.map(item => item.image_id)
    // console.log(data.image_id)
    // console.log(imagApi.image_id)
    // console.log(imagApi)
    
    // const {image_id} = imagApi;
    // console.log(image_id)

    // console.log(imagApi)
 


    const [sortDate , setSortDate] = useState("ascending");
    
    const [sortedDateLists, setSortedDateLists] = useState([]);

    // !EXHIBITIONS PIC DATES
    const dateLists = [

        {
            key: 'date1',
            dateStart: new Date('2024-01-05')
        },
        {

            key: 'date2',
            dateStart: new Date('2024-01-20')
        }

    ];
    
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > previousScrollY) {
            setScrollDown(true)
        } else {
            setScrollDown(false)
        }
        setPreviousScrollY(currentScroll);

    }

    // console.log(product);

      const [arr,setArr] = useState([]);
    
    // let two_Product = product.slice(0,2);
    // console.log(arr)
    const sortExhibitions = (data) => {
        return [...data].sort((a, b) => {
            const A = a.date_start;
            const B = b.date_start;
            return sortDate === "ascending" ? A - B : B - A;
        });
    };

    useEffect(() => {
        if (product.length > 0) {
            const sortedList = sortExhibitions(product.slice(0, 2));
            setArr(sortedList);
            // sortExhibitions(arr)
        }
    }, [sortDate, product]);
    
    
    const addOutsideClickListener = (buttonRef, setIcon) => {
        const handleOutsideClick = (event) => {
            if (buttonRef && !buttonRef.current.contains(event.target)) {
                setIcon(icon);
            }
        }
        document.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
            document.removeEventListener("scroll", handleScroll);
        }
    }
    
    useEffect(() => {
        addOutsideClickListener();
        const CleanUp1 = addOutsideClickListener(buttonRef, setIcon);
        const CleanUp2 = addOutsideClickListener(buttonRef2, setIcon2);
        return () => {
            CleanUp1();
            CleanUp2();
        }
    }, [previousScrollY]);

    

    const ExhibitionToggle = (setIcon, currentIcon) => {
        setIcon(!currentIcon);
    }
    const iconEhibitionsHandler = () => {
        ExhibitionToggle(setIcon, icon);
    };

    const iconEhibitionsHandler2 = () => {
        ExhibitionToggle(setIcon2, icon2);

        // console.log(buttonRef2.current);
        // setIcon2(!icon2);
    };

    const toggleOrder = (order) =>{
        setSortDate(order)
        // setSortDate(order)
    }

    const oncliTest = (eventName) => {

        const selectOrder = eventName.target.innerText.toLowerCase();
        toggleOrder(selectOrder);

        const contentLogo = document.querySelector(`.spanContent`);
        if (contentLogo) {
            const inputName = eventName.target.innerText;
            setContent(inputName);
        }
    }

    return (
        <section>
            <section className='flex flex-col min-h-screen'>
            <Navbar />
            
                <section className={`${styleExhibitions.wrapper_Exhibitions} w-full min-h-screen `} id={`${styleExhibitions.wrapper_Exhibitions}`}>
 
                    <section className="">
                        <h1 className={`${styleExhibitions.wrapper_Exhibitions_title}`}>EXHIBITIONS</h1>

                        <section className={`${styleExhibitions.title_contents_container}`}>

                            <section className={`${styleExhibitions.wrapperExhibitionTitleHeader} flex justify-between items-center`}>

                                <p className ={`${styleExhibitions.wrapperExhibition_title_page}`}>Current</p>
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler} style={{ outline: "none" }} ref={buttonRef}>

                                    <section className={styleExhibitions.wrapper_content  }>
                                    <span className={`${styleExhibitions.spanContent}  spanContent`}>{content}</span>
                                        <ListStyledComponent open={icon}   >
                                            <li onClick={oncliTest} style={{}}>ascending</li>
                                            <li onClick={oncliTest} style={{}}>descending</li>
                                        </ListStyledComponent>

                                        <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "block" : 'none' }} />
                                        <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "none" : 'block' }} />
                                    </section>
                                <div className={`${styleExhibitions.borderBottom}`}></div>
                                    
                                </button>
                            </section>

                         

                            {arr.length === 0 ? (
                            <Skeleton count={12} height={500} />
                        ) : (
                            arr.map(item => (
                                <Redirect_content_Exhibitions data={item} key={item.elementId} />
                            ))
                        )}
                        {/* {console.log(image)} */}
                            {/* {
                                sortedDateLists.map(({ key, dateStart }) => (
                                    <section key={key}>
                                        <section className={styleExhibitions.wrapper_content_exhibitions}>
                                        {image ? <img src={image} alt="" width={400} /> : "nothing"}
                                            
                                        
                                            <img src={image1} alt="" width={""} height='' />
                                            <section className={`${styleExhibitions.image_content}`}>

                                                <p> {dateStart.toDateString()} </p>
                                                <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                                <p className="text-2xl my-[1.5rem]">
                                                    During the 60th Venice Biennale, Unit presents In Praise of Black Errantry, a group exhibition that celebrates the radical Black imagination. Curated by Indie A. Choudhury (The Courtauld Institute of Art), the exhibition brings together works by 19 modern and contemporary Afro-diasporic artists.
                                                </p>

                                                <button className={styleExhibitions.button_explore}>
                                                    Explore now
                                                </button>

                                            </section>
                                        </section>
                                    </section>


                                ))
                            } */}

                            
                            
                            <section className={`${styleExhibitions.wrapperExhibitionTitleHeader} flex justify-between items-center`}>
                                <p>Forthcoming</p>
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler2} style={{ outline: "none" }} ref={buttonRef2}>
                                    <section className={`${styleExhibitions.wrapper_content}`}>

                                    <span className={`${styleExhibitions.spanContent}  spanContent `}>{content}</span>
                                    
                                    <ListStyledComponent open={icon2}   >
                                        <li onClick={oncliTest} style={{}}>ascending</li>
                                        <li onClick={oncliTest} style={{}}>descending</li>
                                    </ListStyledComponent>
                                    <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "block" : 'none' }} />
                                    <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "none" : 'block' }} />
                                    </section>
                                </button>
                            
                            </section>
                            <section className={styleExhibitions.wrapper_content_exhibitions}>


                                <img src={image1} alt="" width="" height='' />
                                <section className="image_content">
                                    <p>4 January - 3 February 2024</p>
                                    <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                    <p className="text-2xl my-[1.5rem]">
                                    During the 60th Venice Biennale, Unit presents In Praise of Black Errantry, a group exhibition that celebrates the radical Black imagination. Curated by Indie A. Choudhury (The Courtauld Institute of Art), the exhibition brings together works by 19 modern and contemporary Afro-diasporic artists.
                                    </p>
                                    <button className={styleExhibitions.button_explore}>
                                        Explore now
                                    </button>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section className={styleExhibitions.wrapper_Content_Images}>

                    </section>
                    <section className={styleExhibitions.image_image_related_title}>
                        <AuthorsNames /> 
                    </section>

                </section>
            <Redirect_Exhibitions_Footer />
            </section>
        </section>
    );
};

export default Redirect_Exhibitions;