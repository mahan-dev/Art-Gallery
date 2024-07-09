import React, { useEffect, useRef, useState, } from 'react';
import Navbar from "../Navbar";
import image1 from "../../assets/images/artists_pics/3.jpg";
import styleExhibitions from "../../Styles/Redirect_exhibitions.module.css";
// 
import minus from "../../assets/images/minus_Icon/minus.svg";
import arrowDown from "../../assets/images/arrow_Down_Icon/chevron-down.svg";
// import "normalize.css";


// importing footer

import Redirect_Exhibitions_Footer from './Redirect_Exhibitions_Footer';


import styled, { keyframes } from "styled-components";
import AuthorsNames from './AuthorsNames';
import { Link, animateScroll as scroll } from "react-scroll";
/*
const IconChanger = styled.section`
display: flex;
// width: 3rem;
// height: 3rem;
flex-direction: column;
justify-content: center;
z-index : 20;
// background-color: purple;
// border-radius: .4rem;
// -webkit-border-radius: .4rem;
// -moz-border-radius: .4rem;
// -ms-border-radius: .4rem;
// -o-border-radius: .4rem;
button{
    transform-origin: 1px;
    transition : all 0.4s linear;
    display : flex;
    padding-bottom : 1rem;
    border-bottom : 4px solid black;
}


button:nth-child(1) {
    // transform:${props => props.open ? "rotate(45deg)" : "rotate(0)"};
}

button:nth-child(2) {
    
}


// {parameter}
`
*/
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

const Redirect_Exhibitions = () => {
 

    const buttonRef = useRef(null);
    const buttonRef2 = useRef(null);

    const [icon, setIcon] = useState(true);
    const [icon2, setIcon2] = useState(true);

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState("ascending");
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [scrollDown, setScrollDown] = useState(false);


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
    
    // Convert the object to an array for sorting
    // const dateArray = Object.entries(dateLists).map(([key, value]) => {
    //     return { key, ...value };
    // });
    
    // Sort the array based on the dateStart values
    const filtered = dateLists.sort((a, b) => b.dateStart - a.dateStart);
    // console.log(filtered)
    // const sortedDateLists = dateArray.reduce((acc, { key, dateStart, dateEnd }) => {
    //     acc[key] = { dateStart, dateEnd };
    //     return acc;
    // }, {});
    
    // console.log(sortedDateLists);
    // console.log(icon);
    // setTimeout(() => {
    //     console.log(icon);

    // }, 0)
    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > previousScrollY) {
            setScrollDown(true)
            // console.log(scrollDown);
        } else {
            setScrollDown(false)
            // console.log(scrollDown);
        }
        setPreviousScrollY(currentScroll);
        // console.log(currentScroll);

    }
    useEffect(() => {


        const sortingDate = [...dateLists].sort((a,b) =>{
            if (sortDate === "ascending"){
                return a.dateStart - b.dateStart;
            } else {
                return b.dateStart - a.dateStart;
            }
        })

        setSortedDateLists(sortingDate);



        //  CLEAN CODE 
        const addOutsideClickListener = (buttonRef, setIcon) => {
            const handleOutsideClick = (event) => {
                console.log(event.target)
                if (buttonRef.current && !buttonRef.current.contains(event.target)) {
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
        // this part is for the aside part of project ----------------------------------------------------------------
        // const asidePanel = 

        const CleanUp1 = addOutsideClickListener(buttonRef, setIcon);
        const CleanUp2 = addOutsideClickListener(buttonRef2, setIcon2);
        return () => {
            CleanUp1();
            CleanUp2();
        }

        // TRASHY CODING 
        /*
        const func1 = ()=>{
            const handleOutsideClick = (event) => {
                console.log(icon2);
                if (buttonRef2.current && !buttonRef2.current.contains(event.target)) {
                    // setOpen("false");
                    console.log(icon2);
                    console.log("is running ")
                    setIcon2(icon2);
                }
                
                else {
                    
                    console.log(icon2);
                    
                    console.log("wrong is running")
                }
                
            };
            console.log(icon2);
            document.addEventListener("click", handleOutsideClick);
            
            return () => {
                
                console.log(icon2);
                document.removeEventListener("click", handleOutsideClick);
            };
        }
        func1();
        
        
        
        
        const func2 = ()=>{
            const handleOutsideClick = (event) => {
                console.log(icon);
                if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                    // setOpen("false");
                    console.log(icon);
                    console.log("is running ")
                    setIcon(icon);
                }
                
                else {
                    console.log(icon);
                    console.log("wrong is running")
                }
                
            };
            console.log(icon);
            document.addEventListener("click", handleOutsideClick);
            
            return () => {
                console.log(icon);
                document.removeEventListener("click", handleOutsideClick);
            };
        }
        func2();
        */

        // const contentSpan = document.querySelector(`.spanContent`);
        // if (contentSpan) {
        //     console.log("found element", contentSpan);
        //     contentSpan.style.color = "tomato";
        // }
        // else {
        //     console.log("Element not found");
        // }
        // console.log(buttonRef.current)
        

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
    }

    const oncliTest = (eventName) => {
        const selectedOrder = eventName.target.innerText.toLowerCase();
        toggleOrder(selectedOrder);



        const sortByNewest = () => {
            const sorted = [...products].sort((a, b) => new Date(b.date_end) - new Date(a.date_end));
        };


        const filter = 1;

        const contentLogo = document.querySelector(`.spanContent`);
        if (contentLogo) {
            const inputName = eventName.target.innerText;
            setContent(inputName);
        }
    }

    const scrollTOTop = () => {
        // scroll.scrollToTop()
        // window.scrollTo
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
                                {/* <IconChanger open={open} onClick={iconEhibitionsHandler} ref={buttonRef} > */}
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler} style={{ outline: "none" }} ref={buttonRef}>
                                    {/* <section className={`${styleExhibitions.wrapper_content}`}> */}
                                    <section className={styleExhibitions.wrapper_content  }>
                                    <span className={`${styleExhibitions.spanContent}  spanContent`}>{content}</span>
                                    {/* <ul className={`${icon} ? ${styleExhibitions.listDisplay} : ${styleExhibitions.listNone} `} style={{display : icon ? "none" : "block"}}> */}
                                        <ListStyledComponent open={icon}   >
                                            <li onClick={oncliTest} style={{}}>ascending</li>
                                            <li onClick={oncliTest} style={{}}>descending</li>
                                        </ListStyledComponent>

                                        {/* </ul> */}
                                        <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "block" : 'none' }} />
                                        <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "none" : 'block' }} />
                                    </section>
                                <div className={`${styleExhibitions.borderBottom}`}></div>
                                    
                                </button>
                                {/* </IconChanger > */}
                            </section>



                            {
                                sortedDateLists.map(({ key, dateStart }) => (
                                    <section key={key}>
                                        <section className={styleExhibitions.wrapper_content_exhibitions}>

                                            <img src={image1} alt="" width={""} height='' />
                                            <section className={`${styleExhibitions.image_content}`}>


                                                <p>5 January - 10 February 2024</p>
                                                <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                                <p className="text-2xl my-[1.5rem]">
                                                    During the 60th Venice Biennale, Unit presents In Praise of Black Errantry, a group exhibition that celebrates the radical Black imagination. Curated by Indie A. Choudhury (The Courtauld Institute of Art), the exhibition brings together works by 19 modern and contemporary Afro-diasporic artists.
                                                </p>
                                                <button className={styleExhibitions.button_explore}>
                                                    Explore now
                                                </button>
                                            </section>
                                        </section>

                                        <section className={styleExhibitions.wrapper_content_exhibitions}>
                                            <img src={image1} alt="" width={505} height='' />
                                            <section className={`${styleExhibitions.image_content}`}>
                                                <p>20 January - 22 February 2024</p>
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
                            }

                            
                            
                            <section className={`${styleExhibitions.wrapperExhibitionTitleHeader} flex justify-between items-center`}>

                                <p>Forthcoming</p>
                                {/* <IconChanger open={open} onClick={iconEhibitionsHandler} ref={buttonRef} > */}
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler2} style={{ outline: "none" }} ref={buttonRef2}>
                                    <section className={`${styleExhibitions.wrapper_content}`}>

                                    <span className={`${styleExhibitions.spanContent}  spanContent `}>{content}</span>
                                    {/* <ul className={`${icon} ? ${styleExhibitions.listDisplay} : ${styleExhibitions.listNone} `} style={{display : icon ? "none" : "block"}}> */}
                                    <ListStyledComponent open={icon2}   >
                                        <li onClick={oncliTest} style={{}}>ascending</li>
                                        <li onClick={oncliTest} style={{}}>descending</li>
                                    </ListStyledComponent>
                                    <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "block" : 'none' }} />
                                    <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "none" : 'block' }} />
                                    </section>

                                    {/* </ul> */}
                                </button>
                                {/* </IconChanger > */}
                            </section>
                            <section className={styleExhibitions.wrapper_content_exhibitions}>


                                <img src={image1} alt="" width="" height='' />
                                <section className="image_content">
                                    {/* <a href="#"> */}
                                    {/* </a> */}

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
               
                {/* <aside className={`${scrollDown ? "fixed top-[50%]" : "none"}`}>
                    
                </aside> */}
                           
            <Redirect_Exhibitions_Footer />

            </section>
            {/* <Redirect_Exhibitions_Footer className={"lskdklsd"} /> */}

        </section>
    );
};

export default Redirect_Exhibitions;




// padding  3  6 rem  for main
// and remove wrapper padding   just giving   flex  justify center 



// </section>
            {/* <aside className={`${scrollDown ? "fixed top-[50%]" : "none"}`}> */}
            // <aside className={`Redirect_Exhibitions_Aside ${scrollDown ? "fade-in" : "fade-out"}`}>
               

            //     <section className='flex rotate-90 z-50'>
            //         <a href='#' className='mr-4'>archive </a>
            //         <a href='#'>current</a>
            //     </section>
            //     <Link to='wrapper_Exhibitions' smooth={true} duration={500}>
            //         scroll
            //     </Link>
            //     <br />
            //     <button onClick={scrollTOTop}>
            //         click
            //     </button>
            // </aside>
        // </section>