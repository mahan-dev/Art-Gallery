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
top: 40px;
right: 0;
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
      
         
        //  CLEAN CODE 
        
        
        const addOutsideClickListener = (buttonRef, setIcon) => {
            const handleOutsideClick = (event) => {
                if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                    setIcon(icon);
                    console.log(icon);
                }
                else (console.log(icon))
                
                
            }
            document.addEventListener("scroll", handleScroll);
            document.addEventListener("click", handleOutsideClick);
            console.log(icon);
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


    const oncliTest = (eventName) => {
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
                <section className={`${styleExhibitions.wrapper_Exhibitions} w-full min-h-screen px-[11rem] `}>
                    <section className="">
                        <h1 className='text-[100px] font-bold'>EXHIBITIONS</h1>
                        {/* <span>hi there</span> */}
                        <section className="image_contents_container grid gap-8">

                            <section className={`${styleExhibitions.wrapperEchibitionTitleHeader} flex justify-between items-center`}>

                                <p>Current</p>
                                {/* <IconChanger open={open} onClick={iconEhibitionsHandler} ref={buttonRef} > */}
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler} style={{ outline: "none" }} ref={buttonRef}>
                                    <span className={`${styleExhibitions.spanContent}  spanContent`}>{content}</span>
                                    {/* <ul className={`${icon} ? ${styleExhibitions.listDisplay} : ${styleExhibitions.listNone} `} style={{display : icon ? "none" : "block"}}> */}
                                    <ListStyledComponent open={icon}   >
                                        <li onClick={oncliTest} style={{}}>ascending</li>
                                        <li onClick={oncliTest} style={{}}>descending</li>
                                    </ListStyledComponent>

                                    {/* </ul> */}
                                    <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "block" : 'none' }} />
                                    <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon ? "none" : 'block' }} />
                                </button>
                                {/* </IconChanger > */}
                            </section>

                            <section className={styleExhibitions.wrapper_content_exhibitions}>
                                <img src={image1} alt="" width={505} height='' />
                                <section className="image_content">
                                    {/* <a href="#"> */}
                                    {/* </a> */}

                                    <p>4 January - 3 February 2024</p>
                                    <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                    <p className="text-2xl my-[1.5rem]">
                                        Exploring the parallels between an athlete’s training and the artistic practice,
                                        'Practice Makes Purrfect' combines images of tennis with Martinez's trademark dark sense
                                        of humour to deep dive into ideas of competition and repetition.
                                    </p>
                                    <button className={styleExhibitions.button_explore}>
                                        Explore now
                                    </button>
                                </section>
                            </section>


                            <section className={styleExhibitions.wrapper_content_exhibitions}>
                                <img src={image1} alt="" width={505} height='' />
                                <section className="image_content">
                                    {/* <a href="#"> */}
                                    {/* </a> */}

                                    <p>4 January - 3 February 2024</p>
                                    <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                    <p className="text-2xl my-[1.5rem]">
                                        Exploring the parallels between an athlete’s training and the artistic practice,
                                        'Practice Makes Purrfect' combines images of tennis with Martinez's trademark dark sense
                                        of humour to deep dive into ideas of competition and repetition.
                                    </p>
                                    <button className={styleExhibitions.button_explore}>
                                        Explore now
                                    </button>
                                </section>
                            </section>
                            <section className={`${styleExhibitions.wrapperEchibitionTitleHeader} flex justify-between items-center`}>

                                <p>Forthcoming</p>
                                {/* <IconChanger open={open} onClick={iconEhibitionsHandler} ref={buttonRef} > */}
                                <button className={styleExhibitions.ascDscButton} onClick={iconEhibitionsHandler2} style={{ outline: "none" }} ref={buttonRef2}>
                                    <span className={`${styleExhibitions.spanContent}  spanContent `}>{content}</span>
                                    {/* <ul className={`${icon} ? ${styleExhibitions.listDisplay} : ${styleExhibitions.listNone} `} style={{display : icon ? "none" : "block"}}> */}
                                    <ListStyledComponent open={icon2}   >
                                        <li onClick={oncliTest} style={{}}>ascending</li>
                                        <li onClick={oncliTest} style={{}}>descending</li>
                                    </ListStyledComponent>
                                    <img src={arrowDown} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "block" : 'none' }} />
                                    <img src={minus} alt="" width={50} height={60} onClick={iconEhibitionsHandler} style={{ display: icon2 ? "none" : 'block' }} />

                                    {/* </ul> */}
                                </button>
                                {/* </IconChanger > */}
                            </section>
                            <section className={styleExhibitions.wrapper_content_exhibitions}>


                                <img src={image1} alt="" width={505} height='' />
                                <section className="image_content">
                                    {/* <a href="#"> */}
                                    {/* </a> */}

                                    <p>4 January - 3 February 2024</p>
                                    <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                                    <p className="text-2xl my-[1.5rem]">
                                        Exploring the parallels between an athlete’s training and the artistic practice,
                                        'Practice Makes Purrfect' combines images of tennis with Martinez's trademark dark sense
                                        of humour to deep dive into ideas of competition and repetition.
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
            <Redirect_Exhibitions_Footer className={"lskdklsd"} />

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