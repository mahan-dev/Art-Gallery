
import { useEffect, useState, useRef } from "react";
import Styles_main from "../Styles/main.module.css";
import footer from "../Styles/footer.module.css";
const Footer = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const footerRef = useRef();
    const [showFooter, setShowFooter] = useState(false);

    // useEffect(()=>{
    //     window.addEventListener("scroll", function(){
    //         const footer = document.querySelector(".footer");

    //         if(footer) {
    //             console.log("is true")

    //         }else{console.log("is false")}
    //         const scrollY = window.scrollY;

    //         const maxReveal = 200;
    //         const scrollThershold = 600;

    //         const revealAmount = Math.min(maxReveal, scrollY-scrollThershold);
    //         const footerHeight = revealAmount > 0 ? `calc(100vh)` : "100vh";
    //         footer.style.bottom = `-${revealAmount}px`;
    //         footer.style.height= footerHeight;
    //         footer.style.overflow = "hidden";
    //         footer.style.transfrom = "translateY(${revealAmount}px)"
    //     })
    // }, [])
    // useEffect(() => {
        
    //     const handleScroll = () => {
    //         const footer = footerRef.current;
    //         console.log("scrolling");
    //         const isAtBottom =
    //     window.innerHeight + window.scrollY >= document.documentElement.scrollHeight  &&
    //     window.innerHeight + window.scrollY <= document.documentElement.scrollHeight ;
    //     if(footer){
    //         footer.style.bottom = isAtBottom ? "0" : "100px";
    //     }
    
    // //   setShowFooter(isAtBottom);
    //         // const isAtBottom = window.innerHeight + window.scrollY > document.body.offsetHeight;
    //         setShowFooter(isAtBottom);
    //         console.log("is at bottom", isAtBottom);
    //         console.log(setShowFooter())

            
    //     }
  
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         removeEventListener("scroll", handleScroll);
    //     }
    // }, [])
    // const opacity = Math.min(1, scrollPosition / 200);
    // const bottom = Math.max(-100, -scrollPosition);
    // const [isVisible, setIsVisible] = useState(true);


    // useEffect(() => {
    //     let lastScrollPosition = window.scrollY;
    //     const handleScroll = () => {
    //         const currentScrollPosition = window.scrollY;

    //         if (currentScrollPosition > lastScrollPosition) {
    //             setIsVisible(false);
    //             console.log(currentScrollPosition);
    //             console.log(lastScrollPosition);
    //         } else {
    //             setIsVisible(true);
    //         }
    //         lastScrollPosition = currentScrollPosition;
    //     };



    //     window.addEventListener("scroll", handleScroll);
    // }, []);
    // const myInputHandler = event => {
    //     console.log(event.target.value);
    // }
    return (

        //     <footer
        //     id={Styles_main.footer}
        //     className="bg-blueviolet w-full h-400px flex justify-center items-center text-3xl fixed bottom-0"
        //     style={{ zIndex: 4 }}
        //   >
        //     This is the footer
        //   </footer>

        // id={Styles_main.footer}
        <footer 
        className="fixed bottom-0 z-10 flex justify-center items-center bg-red-600 w-full min-h-screen"
            // min-h-screen
            // className={`${footer.footer} ${showFooter? footer.visible : ""}`}
        //     style={{
        //         // position: 'fixed',
        // bottom: `${bottom}px`, // Adjust the value based on your footer height
        // left: '0',
        // height: "100vh",
        // width: '100%',
        // backgroundColor: `rgba(51, 51, 51, ${opacity})`, // Adjust the RGB values and opacity
        // color: '#fff',
        // textAlign: 'center',
        // padding: '10px',
        // transition: 'bottom 0.5s ease-out'
            // }}

        // className={`${footer.footer} bg-pink-400 w-full  flex justify-center items-center text-27 fixed z-2 bottom-0`}
        // h-[400px]
        // style={{
        //     transition : "bottom 0.5s",
        //     bottom : isVisible ? "0" : "-400px",
        // }}
        // style={{transition : "bottom 0.5s"}}

        // style=
        // {{
        //     backgroundColor: "blueviolet",
        //     width: "100%",
        //     height: "400px",
        //     display: "flex",
        //     bottom: "0",
        //     // right : "0",
        //     // left : "0",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     fontSize: "3rem",
        //     position: 'fixed',
        //     // marginBottom : "400px",
        //     zIndex: "4",
        // }}
        >
           this is footer
        

            {/* <input type="email" /> */}
        </footer>
    );
};

export default Footer;