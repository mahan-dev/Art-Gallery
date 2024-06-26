import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import redirect_artists from "../../Styles/redirect_artists.module.css";

import Navbar from '../Navbar';
import Footer from "../Footer";
import Redirect_Exhibitions_Footer from './Redirect_Exhibitions_Footer';
// Import Images
import image1 from "../../assets/images/artists_pics/1.jpg";
import image2 from "../../assets/images/artists_pics/2.jpg";
import image3 from "../../assets/images/artists_pics/3.jpg";
import image4 from "../../assets/images/artists_pics/4.jpg";
import image5 from "../../assets/images/artists_pics/5.jpg";
import image6 from "../../assets/images/artists_pics/6.jpg";


// importing Aos Library
import AOS from "aos";
import "aos/dist/aos.css";


const RedirectArtists = () => {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [scrollDown, setScrollDown] = useState(false);
    const prevScrollY = useRef(0);

    // State for Aside
    const [visibleListView, setVisibleListView] = useState(false);
    const [visibleGrid, setVisibleGrid] = useState(false);
    // State for Aside


    const handleScrollAos = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        prevScrollY.current = currentScrollY;
    }

    const handleScroll = () => {
        const wrapperContent = document.querySelector(".wrapper__contents_tailwdind");
        const wrapperContentOffset = wrapperContent.offsetTop;
        if (window.scrollY === wrapperContentOffset) {
            setScrollDown(false);
            console.log(`now is equall`)

        } else if (window.scrollY > wrapperContentOffset) {
            setScrollDown(true)
        }
        setPreviousScrollY(window.scrollY);
    }

    const scrollTOTop = () => {
        const TargetElement = document.getElementById("TargetElement");
        if (TargetElement) {
            TargetElement.scrollIntoView({ behavior: "smooth" })
        }

    }

    const handleListView = (event) => {
        event.preventDefault();
        const target = document.getElementById("listzz");
        target.scrollIntoView({ behavior: "smooth" })
    }
    const handleGridView = (event) => {
        event.preventDefault();
        const target = document.getElementById("GridView");
        target.scrollIntoView({ behavior: "smooth" });
    }

    // const [elementEnd, setElementEnd] = 
    const [elementEnd, setElementEnd] = useState(false);

    const isElementAtEnd = (element) => {
        // if (!element) return false; // Check if the element exists
        const rect = element.getBoundingClientRect();
        return rect.bottom <= window.innerHeight;
    };
    const handleScrollAside = () => {
        const element = document.getElementById("listViewContent");
        if (!element) return; // Exit early if the element doesn't exist
        const handleScrollzzz = () => {
            if (isElementAtEnd(element)) {
                setElementEnd(true);
                console.log("is ending component")
                // console.log('Reached the end of the element!');
                setScrollDown(false);
            }
        };

        const footerVisibility = document.querySelector(".footerArtists");
        if (window.scrollY >= footerVisibility.offsetTop) {
            console.log("is showing it ")
        } else {
            console.log("not showing");
        }
        const listViewSection = document.getElementById("listView");
        const gridViewSection = document.getElementById("GridView");
        console.log(listViewSection.offsetTop);
        const listViewOffset = listViewSection.offsetTop;
        const gridViewOffset = gridViewSection.offsetTop;
        window.addEventListener('scroll', handleScrollzzz);
        
        if (window.scrollY >= listViewOffset && window.scrollY < gridViewOffset) {
            setVisibleListView(true);
            setVisibleGrid(false);
        } else if (window.scrollY >= gridViewOffset) {
            setVisibleListView(false);
            setVisibleGrid(true);
        } else {
            setVisibleListView(false);
            setVisibleGrid(false);

        }

    }

    useEffect(() => {
        
        // i should check this code to see !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
        // const isInFooter =localStorage.getItem("isInFooter");
        // if(isInFooter === "true"){
        //     setScrollDown(false);
        // }

        // if (isElementAtEnd) {
        //     console.log(isElementAtEnd)
        //     setScrollDown(false);
        // }
        // Start Aos Part
        AOS.refresh();
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
            offset: 200,
        })

        // End Aos Part

        document.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScrollAos);
        window.addEventListener("scroll", handleScrollAside)

        return () => {
            window.removeEventListener("scroll", handleScrollAos);
            document.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScrollAside);
        }
    }, [previousScrollY]);

    return (
        <div className='relative z-40'>
            <Navbar />

            <section className={`${redirect_artists.wrapper} `}>
                {/* wrapper__contents_tailwdind for below section */}
                <section id="listViewContent" className={`${redirect_artists.wrapper__contents} wrapper__contents_tailwdind fixer`}>

                    <h1 id="listzz" className={`${redirect_artists.wrapper__contents_h1_title}`}>ARTISTS</h1>
                    <section className={`${redirect_artists.wrapper_authors} redirect_tailwdinCss`}>

                        <div><Link to="#">ESTHER JANSSEN</Link></div>
                        <div><Link to="#">MAURO C. MARTINEZ</Link></div>
                        <div><Link to="#">MAURO C. MARTINEZ</Link></div>
                        <div><Link to="#">MAURO C. MARTINEZ</Link></div>
                        <div><Link to="#">STHENJWA LUTHULI</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">JEREMY OLSON</Link></div>
                        <div><Link to="#">JASON BOYD KINSELLA</Link></div>
                        <div><Link to="#">HEESOO KIM</Link></div>
                        <div><Link to="#">STEPHEN WONG</Link></div>
                        <div><Link to="#">MIGUEL ÁNGEL PAYANO JR.</Link></div>
                        <div><Link to="#">ZIPING WANG</Link></div>
                        <div><Link to="#">CYDNE JASMIN COLEBY</Link></div>
                        <div><Link to="#">HELEN BEARD</Link></div>
                        <div><Link to="#">SASHA FERRÉ</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">STACEY GILLIAN ABE</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">JESS ALLEN</Link></div>
                    </section>


                    <section id="GridView" className={`${redirect_artists.artists_wrapper_image} py-20`}>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            {/* there was a pic */}
                            {/* <section> */}
                            <img src={image5} alt="" />
                            {/* <section className={`${redirect_artists.imageBg}`}>

</section> */}
                            <div>
                                <p>name family-name</p>
                            </div>
                            {/* </section> */}

                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "down" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-up" : "fade-down"}`} data-aos="fade-up" >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                    </section>

                </section>
                <aside className={`Redirect_Artists_Aside ${scrollDown ? "fade-in" : ""}`}>
                    {/* fadeIn  fadeOut */}

                    <section className='flex rotate-90 z-50'>
                        <a href='/' id='listView' onClick={handleListView} className={`${visibleListView ? "ListViewLists" : ""}`}>List View </a>
                        <a href='/' id='GridView' onClick={handleGridView} className={visibleGrid ? "GridView" : ""}>Grid View</a>
                    </section>
                    {/* <Link to='wrapper_Exhibitions' smooth={true} duration={500}>
                    scroll
                </Link> */}
                </aside>
                {/* ListViewLists
                    GridView */}
                <footer>

                    <Redirect_Exhibitions_Footer className="footerArtists" />
                </footer>

            </section>
        </div>
    );
};

export default RedirectArtists;