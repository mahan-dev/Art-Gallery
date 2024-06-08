import React, { useEffect, useRef, useState } from 'react';
import styleExhibitions from "../../Styles/Redirect_exhibitions.module.css";
import pic1 from "../../assets/images/image-1.jpg";
import pic2 from "../../assets/images/image-2.jpg";
import pic3 from "../../assets/images/image-3.jpg";
// import pic2 from "../../assets/images/image-2.jpg";

//IMPORTING AOS

import AOS from "aos";
import "aos/dist/aos.css";

const AuthorsNames = () => {
    

    const [pic, setPic] = useState(pic3);

    const [hoveredElement, setHoveredElement] = useState(null);




    // const animatedRef = useRef(null);
    // const animatedRef2 = useRef(null);

    // const handleScrollAnimate = () => {
    //     const element = animatedRef.current;
    //     const element2 = animatedRef2.current;
    //     if (element || element2) {
    //         const elementTop = element.getBoundingClientRect().top;
    //         const elementTop2 = element2.getBoundingClientRect().top;
    //         const windowHeight = window.innerHeight;
    //         if ( elementTop < windowHeight * 0.94 ||elementTop2 < windowHeight * 0.94) {
    //             element.classList.add(styleExhibitions.fadeIn);
    //             element2.classList.add(styleExhibitions.fadeIn);

    //         } else {
    //             element.classList.remove(styleExhibitions.fadeIn);
    //             element2.classList.add(styleExhibitions.fadeIn);
    //         }
    //     }
    // }

    useEffect(() => {

        AOS.refresh();


        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 85,
        })


        // window.addEventListener("scroll", handleScrollAnimate);


        // return () => {
        //     window.removeEventListener("scroll", handleScrollAnimate);
        // }

        // window.addEventListener("scroll", handleSticky);
        // return ()=>{
        //     window.removeEventListener("scroll", handleSticky);
        // }

        // if(pic&&pic.image){

        //     // setPic(require(`../../assets/images/${pic.image}`).default);


        //     import(`../../assets/images/${handleHoverElement.image}`)

        //     .then((module)=>{
        //         setPic(module.default);
        //     })
        //     .catch((error)=>{
        //         console.error(error);
        //     })

        // }

    }, []);

    const handleHoverElement = (element) => {
        // console.log("you hover the element", element);

        if (element && element.image) {

            setPic(element.image);
            setHoveredElement(element);
        }
    }

    return (

        <section className='mt-4'>


            <span>Archive</span>

            <section className={styleExhibitions.wrapper_authors_names}>
                <section className={styleExhibitions.leftSide}>
                    {/* pictureData.map((data)=>{
                    <section key={data.id} onMouseEnter={() => handleHoverElement(data)}>

                        <section data-aos="fade-right" >
                            <p>{data.data}</p>
                            <h3>{data.name}</h3>
                            <h4>{data.title}</h4>
                        </section>

                    </section>
                }) */}



                    {/* {Array.from={()=>handle}} */}

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        {/* {pic && <img style={{display: pic ? "block" : "none", scrollBehavior:"smooth"}} src={pic} alt="titleImage" />} */}
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>

                    </div>


                    <div onMouseEnter={() => handleHoverElement({ image: pic1 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic2 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>


                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section className='' data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                    <div onMouseEnter={() => handleHoverElement({ image: pic3 })} className={`${styleExhibitions.author_wrapper_content} my-10`}>
                        <section data-aos="fade-right">
                            <p>7 March - 6 April 2023</p>
                            <h3>TYLER HOBBS</h3>
                            <h4>Mechanical Hand</h4>
                        </section>
                    </div>

                </section>

                <section className={`${styleExhibitions.rightSide}`}>

                    <section className={styleExhibitions.wrapper_image}>
                        <img style={{
                            display: pic ? "block" : "none",

                            scrollBehavior: "smooth",
                        }}
                            src={pic} alt="titleImage" />

                    </section>
                </section>
            </section>
        </section>

    );
};

export default AuthorsNames;