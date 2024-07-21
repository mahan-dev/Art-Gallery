import React, { useState } from 'react';
import styleExhibitions from "../../Styles/Redirect_exhibitions.module.css";
import { useEffect } from 'react';

const Redirect_content_Exhibitions = ({ data }) => {

    const [image, setImage] = useState([]);

    useEffect(() => {
        setImage(`https://www.artic.edu/iiif/2/${data.image_id}/full/1686,/0/default.jpg`);
    }, [data])





    return (
        <div>

            <section className={styleExhibitions.wrapper_content_exhibitions}>

                <img src={image} alt="" width={""} height='' />
                <section className={`${styleExhibitions.image_content}`}>

                    <p> {data.date_start} </p>
                    {/* {data.date_start.toDateString()} */}
                    <h4 className='text-base'>PRACTICE MAKES PURRFECT</h4>
                    <p className={`${styleExhibitions.content_description} my-[1.5rem]`}>
                        During the 60th Venice Biennale, Unit presents In Praise of Black Errantry, a group exhibition that celebrates the radical Black imagination. Curated by Indie A. Choudhury (The Courtauld Institute of Art), the exhibition brings together works by 19 modern and contemporary Afro-diasporic artists.
                    </p>

                    <button className={styleExhibitions.button_explore}>
                        Explore now
                    </button>

                </section>
            </section>


        </div>
    );
};

export default Redirect_content_Exhibitions;