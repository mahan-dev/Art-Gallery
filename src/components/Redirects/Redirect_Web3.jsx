import React, { useEffect, useState } from 'react';
import BackgroundImage from "../../assets/images/redirectWeb3mage/BlackImage.avif";
import "../../assets/images/redirectWeb3mage/BlackImage.avif";
import stylesWeb3 from "../../Styles/RediretWeb3.module.css";
import Navbar from "../Navbar";
import "../../Styles/Redirect_swiper_web3_styles.css";
import SwiperWeb3 from "../Redirects/Swiper_web3";
import imgCurrent from "../../assets/images/redirectVoices-images/first_slide.jpg";
import { FetchApiCoin } from '../../../services/ArtGalleryApi';
import NftImages from './NftImages';
import ForthImage from "../../assets/images/redirectVoices-images/HeaderImageVoices.jpg";
import ThirdImage from "../../assets/images/redirectVoices-images/third_slide.jpg";
import SecondImage from "../../assets/images/redirectVoices-images/second_slide.jpg";
import FirstImage from "../../assets/images/redirectVoices-images/first_slide.jpg";

import Redirect_Exhibitions_Footer from "./Redirect_Exhibitions_Footer";



const Redirect_Web3 = () => {

    // const [ethPrice, setEthPrice] = useState([]);
    let ethPrice = [];
    const [current, setCurrent] = useState();
    const [showPrice, setShowPrice] = useState(null);

    let priceNftLists = [
        { title: 'Loren Barden', image: ForthImage, price: 0.02 },
        { title: 'Sam Lord', image: ThirdImage, price: 0.12 },
        { title: 'eyban Seu', image: SecondImage, price: 0.1 },
        { title: 'Yasmin James', image: FirstImage, price: 0.3 },
        { title: 'Larim Zeih', image: FirstImage, price: 1 },
        { title: 'Loren Barden', image: FirstImage, price: 0.57 },
        { title: 'Loren Barden', image: FirstImage, price: 0.22 },
        { title: 'Loren Barden', image: FirstImage, price: 0.79 },
        { title: 'Loren Barden', image: FirstImage, price: 0.212 },
        { title: 'Loren Barden', image: FirstImage, price: 0.1 },
        { title: 'Loren Barden', image: FirstImage, price: 0.98 },
        { title: 'Loren Barden', image: FirstImage, price: 0.243 },
    ]

    let finalPrice = priceNftLists.map((item, index) => {
        return { ...item, price: item.price }
    });
    console.log(finalPrice);

    const settingPrice = async () => {

        // fetchData Part
        const data = await (FetchApiCoin());
        ethPrice = data;
        // fetchData Part

        const priceGrabber = ethPrice.filter(item => item.symbol === "eth");
        const setPrice = priceGrabber.map(item => item.current_price);

        if (setPrice > 0) {
            localStorage.setItem("ethPrice", JSON.stringify(...setPrice));
            let grabber = Number(localStorage.getItem("ethPrice"));
            setShowPrice(grabber)
            if (setPrice !== localStorage.getItem("ethPrice")) {
                localStorage.setItem("ethPrice", JSON.stringify(...setPrice));
            }
        } else {
            console.log("is not greather that what you said ...")
        }
    }
    useEffect(() => {
        settingPrice();

        // const initialInterval = setInterval(() => {
        //     console.log("wfjpwjjwopifpojwf")
        //     settingPrice()
        // }, 60000)
        // setShowPrice(localStorage.getItem("ethPrice"));
        // return () => clearInterval(initialInterval);
    }, [])


    const [hover, setHover] = useState("Current");
    const [clicked, setClicked] = useState("Current");


    const activeLinkHandling = (link) => {
        setHover(link);

    }
    useEffect(() => {
    }, [hover, clicked])

    return (
        <section className={`${stylesWeb3.wrapper_web3} relative flex flex-col`}>
            {console.log(showPrice)}
            {console.log(ethPrice)}
            <Navbar />


            <section className='relative flex justify-center flex-col '>
                <section className='h-full z-40 relative bg-white'>

                    <section className={`${stylesWeb3.background_image} relative top-0 bottom-0 z-1 flex justify-start items-center`}>
                    </section>

                    <section className=' px-[10%] mt-[20%] top-6 absolute flex flex-col justify-center items-start'>
                        <p className='text-[2rem] text-white  border-b-2 w-full'> welcome to web3  </p>

                        <h2 style={{ color: "white" }} className='text-[2rem]   '> ART WITHOUT LIMITS </h2>
                        <h5 style={{ color: "white" }} className='text-[2rem]   '> Join the digital art renaissance.
                        </h5>
                    </section>
                </section>


                <section id='fixer' className={`${stylesWeb3.wrapperContents} mb-[100vh]`}>

                    <section className={`${stylesWeb3.wrapper_content_web3} `}>

                        <div className={`${stylesWeb3.content_wrapper_left}`}>
                            <p className='my-4'>Built at the accelerating intersection of art and technology,
                                Unit Web3 is a blockchain platform of highly-curated digital art programming dedicated to identifying
                                and supporting generation-defining artists working with ascendant technologies.</p>
                            <p className='my-4'>Unit was founded in 2013 upon the belief that art is for everyone. We seek to drive change in the art world by promoting accessibility and inclusivity – opening doors between new artists and audiences. </p>
                            <p className='my-4'>In 2021, we led the way for art galleries entering the NFT space in recognising their potential for unparalleled freedom, transparency and access for generations of digital artists who have struggled to build careers in the traditional art ecosystem. We realised that the dynamics of this space appealed to new audiences who felt excluded from the traditional art world; that traditional barriers to access were breaking down, and new rules were forming. </p>

                        </div>

                        <div className={`${stylesWeb3.content_wrapper_right}`}>
                            <p className='my-4'>Our ambition is to unify artists, collectors and enthusiasts – regardless of the media or practices they choose to adopt – because we believe that art is a universal language that has the power to bring us all together. We are striving to remove the stigma around NFTs, liberating artists who are using the technology from the label of “digital artist” or “NFT artist”, and instead positioning them simply, as artists. In line with this vision for a truly integrated art world, we are proud to prioritise Web3 as a key pillar of our programming.

                            </p>
                            <p className='my-4'>This leap forward signals our commitment to leading the charge in creating the art world of tomorrow. Our programme will focus on championing the world’s most exciting digital artists, and will comprise both physical and online exhibitions, as well as art fairs and collaborative projects with leading partners from the art, culture and technology sectors.

                            </p>
                            <p>Ultimately, our mission is to further cross-pollinate the distinct traditional art and NFT collecting audiences, generating ongoing opportunities for education and participation across both communities, and creating a truly integrated, accessible, and forward-thinking art world.  </p>
                        </div>
                    </section>

                    <section className='flex justify-center '>
                        <section className={`${stylesWeb3.gridPartAdding}`}>
                            <section className={`${stylesWeb3.container_picture_contents}`}>
                                <section className={`${stylesWeb3.picture_contents__title}`}>
                                    <div className={`${stylesWeb3.contents_title_link}`} onClick={() => activeLinkHandling("Current")} >
                                        <a onClick={() => activeLinkHandling("Current")} onMouseOver={() => console.log("is enter")} className={`${hover === "Current" ? "text-black" : "text-gray-500"}`} >Current & Upcoming</a>
                                        <div className={`${hover === "Current" ? stylesWeb3.borderBottom : console.log("not it is ")}`}></div>
                                    </div>
                                    <div className={`${stylesWeb3.contents_title_link} `} onClick={() => activeLinkHandling("Upcoming")} >

                                        <a onClick={() => activeLinkHandling("Upcoming")} className={`${hover === "Upcoming" ? "text-black" : "text-gray-500"}`} >Upcoming</a>
                                        <div className={`${hover === "Upcoming" ? stylesWeb3.borderBottom : ""}`}></div>
                                    </div>
                                    {/* // ${hover === "upcoming" ? "active_Link_Title" : ""}`} onMouseEnter={()=> setHover("upcoming") } onMouseLeave={()=>setHover(null) */}
                                    <div className={`${stylesWeb3.contents_title_link}`} onClick={() => activeLinkHandling("Archive")}>
                                        <a onClick={() => activeLinkHandling("Archive")} className={`${hover === "Archive" ? "text-black" : "text-gray-500"}`} >Archive</a>
                                        <div className={`${hover === "Archive" ? stylesWeb3.borderBottom : ""}`}></div>
                                    </div>
                                </section>

                                <section className={`${stylesWeb3.picture_contents}`}>
                                    <section className={`${stylesWeb3.picture_contents_left}`}>
                                        <img src={imgCurrent} alt="pic content" />
                                    </section>


                                    <section className={`${stylesWeb3.picture_contents_right} flex flex-col items-center`} >
                                        <p>11 April - 10 May 2024</p>
                                        <p className={`${stylesWeb3.right_artistName}`}>Loren Bendar</p>
                                        <p className='my-4'>
                                            Loren Bednar's 'Pressed Pause' marks Unit's
                                            second release with Art Blocks Engine,
                                            an interactive collection that speaks to our
                                            desire to pause and reflect in order to fully embrace our present.
                                        </p>

                                        <button className={`${stylesWeb3.right_button}`}>Explore Now</button>
                                    </section>

                                </section>
                            </section>

                            <section className={`${stylesWeb3.wrapper_Nft_Web3}`}>
                                <p className={`${stylesWeb3.Nft_Web3_title}`}>All NFTs</p>

                                <section className={`${stylesWeb3.wrapper_Grid_NFTs_Web3}`}>




                                    {finalPrice.map((item, index) => (
                                        <NftImages key={index} data={item} />
                                    ))}
                                </section>
                            </section>



                            <section className='my-4 '>
                                {/* grid overflow-hidden  for above*/}
                                <div className='border-b-2 my-4'>
                                    <p className='p-2'>
                                        Related Posts
                                    </p>
                                </div>

                                <SwiperWeb3 />
                            </section>
                        </section>
                    </section>

                </section>
            </section>

            <Redirect_Exhibitions_Footer />
        </section>

    );
};

export default Redirect_Web3;