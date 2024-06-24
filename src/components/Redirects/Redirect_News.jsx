import { useEffect, useRef, useState } from "react";
import image1 from "../../assets/images/artists_pics/1.jpg";
import image2 from "../../assets/images/artists_pics/2.jpg";
import image3 from "../../assets/images/artists_pics/3.jpg";
import image4 from "../../assets/images/artists_pics/4.jpg";
import image5 from "../../assets/images/artists_pics/5.jpg";
import image6 from "../../assets/images/artists_pics/6.jpg";

import Navbar from "../Navbar";

import styled, { keyframes } from "styled-components";


const translateAnimation = keyframes`
0%{
opacity :0;
transform : translateY(-10px);

}

100%{
opacity : 1;
transform : translateY(0);
}


`

const NewsDropdown = styled.ul`
display: ${props => (props.open ? "block" : "none")};
position: absolute;
right : 0;
top: 100%;
width: max-content;
// width : 100%;
animation : ${translateAnimation} ease .4s;


`


import StyleNews from "../../Styles/Redirect_News.module.css";
const Redirect_News = () => {
    const [content, setcontent] = useState("View all")
    const [isOpened, seIsOpened] = useState(false);
    const buttonRef = useRef(null);
    const dropDown = useRef(null);

    const textChanger = () => {

    }

    
    const clickHandler = () => {
        seIsOpened(!isOpened);
        
    }
    const clickOutDrop = (event)=>{
        console.log(event.target);

        if(buttonRef.current && !buttonRef.current.contains(event.target)) {
            console.log("is true")
            seIsOpened(isOpened)
        }

        console.log(isOpened)
        console.log(event.target)

        
    }

    const dropDownText = (eventName) => {
        const dropDownDisplayValue = document.querySelector(".dropDownListValue");
        if (dropDownDisplayValue) {
            const inputValue = eventName.target.innerText;
            setcontent(inputValue)

        }

    }

    useEffect(()=>{
        window.addEventListener("click", clickOutDrop);
        return ()=>{

        }

    },[])

    return (
        <section>
           
            <Navbar />
            <section className={`${StyleNews.wrapper_news } flex flex-col pt-20 text-2xl`}>

                <div className="title">
                    <h3 className="text-[3rem] text-b">NEWS</h3>
                </div>


                <div className={`${StyleNews.title__bar} flex justify-between p-5`}>
                    {/* title__bar */}
                    <p className="">All posts</p>
                    <section>
                        <button onClick={clickHandler} ref={buttonRef} style={{ outline: "none" }} className="relative">

                            <p className="dropDownListValue" >{content}</p>
                            <NewsDropdown  open={isOpened} className="bg-black">
                                <li onClick={dropDownText} className="listItem text-white">View all</li>
                                <li onClick={dropDownText} className="listItem text-white">new</li>
                                <li onClick={dropDownText} className="listItem text-white">old</li>
                            </NewsDropdown>
                        </button>
                    </section>

                </div>

                <section className={StyleNews.gridMine} >
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image1} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image2} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image3} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image4} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image5} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image6} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image1} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image2} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                    <div className={`${StyleNews.wrapperGrid}`}>
                        <section>

                        <img src={image3} alt="img" width={350} />

                        <div>
                            <p>this is just a test </p>
                        </div>
                        </section>
                    </div>
                </section>

            </section>
        </section>


    );
};

export default Redirect_News;