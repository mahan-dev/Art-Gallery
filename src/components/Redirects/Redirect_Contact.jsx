// import React from 'react';

//import Styles css
import Styles from "../../Styles/Redirect_Store_Contact.module.css";

// import Icons 

import facebookIcon from "../../assets/images/Redirect_Contact/facebook-f.svg";
import X_TwitterIcon from "../../assets/images/Redirect_Contact/x-twitter.svg";
import InstagramIcon from "../../assets/images/Redirect_Contact/instagram.svg";
import LinkedinIcon from "../../assets/images/Redirect_Contact/linkedin.svg";


// import google API  With Key

import MapGoogleApi from "./MapGoogleApi";
import { useEffect, useRef, useState } from "react";
const Location_Lat = 40.7566;
const Location_Lng = -102.9716;
// const BaseUrl  =



const Redirect_Contact = () => {



    const email_contact = useRef(null);
    const [mailTracker, setMailTracker] = useState(false);
    const [emailMessage, setEmailMessage] = useState(false);
    const emailMessage_Ref_Contact = useRef(null);
    const [emailValidation, setEmailValidation] = useState("");
    const [email, setEmail] = useState(false);
    const handleEmailValidation = (event) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const email_value = event.target.value;
        setEmail(email_value);
        const emailValidation = emailRegex.test(email_value);

        setEmailValidation(emailValidation);
        if (emailValidation) {
            emailMessage_Ref_Contact.current = setEmailMessage("is valid");
        } else if (!emailValidation) {
            emailMessage_Ref_Contact.current = setEmailMessage("is not valid");
        }


    }
    const handleEmailClick = (event) => {
        if (email_contact.current.value === "" && email_contact.current.contains(event.target)) {
            setMailTracker(true)
        }
    }

    const clickOutside = (event) => {
        if (email_contact.current && email_contact.current.value === "" && !email_contact.current.contains(event.target) && mailTracker) {
            emailMessage_Ref_Contact.current.innerHtml = setEmailMessage("Please complete this required field ");
        }
    }


    useEffect(() => {
        window.addEventListener("click", handleEmailClick)
        window.addEventListener("click", clickOutside)
        return () => {
            window.removeEventListener("click", handleEmailClick);
            window.removeEventListener("click", clickOutside);
        }


    }, [mailTracker, emailMessage, email])
    return (
        <section className="flex">
            <section className={`${Styles.Wrapper} w-[50%] bg-white flex flex-col  pt-40 pb-28 pl-[6rem] pr-[4rem]`}>
                <section className={`${Styles.Wrapper_Left} flex-col flex`}>
                    <h1 className="text-[1.8rem]">We want to hear from you </h1>


                    <form className={`${Styles.Left_form} flex flex-col mb-6`} action="">
                        <section>
                            <input type="text" className={Styles.Left_form_Input} placeholder="First name" />
                            <input type="text" className={Styles.Left_form_Input} placeholder="Last name" />
                        </section>
                        <input
                            type="email"
                            ref={email_contact}
                            onChange={handleEmailValidation}

                            className={Styles.Left_form_Input} placeholder="Email" />
                        <div className="inline-block" ref={emailMessage_Ref_Contact} >{emailMessage}</div>

                        <div></div>
                        <input className={Styles.Left_form_Input} type="tel" placeholder="Phone" />
                        <textarea className={Styles.Left_form_Input} placeholder="message" name="" id="" ></textarea>
                        <div className="flex mb-4">
                            <input className="" type="checkbox" name="" id="" />
                            <p className="">Let us keep you up-to-date with art world news, exhibitions and events.</p>
                        </div>
                        <button type="submit">submitBtn</button>
                    </form>

                </section>
                <section className={`${Styles.Left_Contents_Wrapper} flex flex-row gap-[20px]`}>
                    <section className={`${Styles.Contents_Wrapper_Content}`}>
                        <p className={`${Styles.content_Header}  mb-4`}>Unit, Mayfair</p>
                        <p className="mb-4">3 Hanover Square, Mayfair,</p>
                        <div className="mb-4">
                            <p>Opening times:
                                Mon–Sat, 10am–7pm,
                                Sunday, 12pm-6pm
                            </p>
                        </div>

                        <p className="mb-4">No booking required.</p>

                        <div className="mb-4">
                            <p>{`+44 (0) 20 7494 2035`}</p>

                            <a style={{ textDecoration: "underline" }} href="#">art@unitlondon.com</a>
                        </div>

                        <p className={`${Styles.content_Header}`}>Press Enquiries</p>
                        <p>For all press enquiries please contact us at;</p>
                        <div className="mb-4">

                            <p>+44 020 7494 2035</p>
                            <a href="#" style={{ textDecoration: "underline" }}>press@unitlondon.com</a>
                        </div>
                        <p>
                            For the gallery’s Terms of Service, please visit this page.
                            For Our Cookies Policy, visit this page
                            For Our Privacy Policy, visit this page.
                        </p>

                        <p>For the gallery’s Terms of Service, please visit this page.
                        </p>
                        <p>For Our Cookies Policy, visit this page</p>
                        <p>For Our Privacy Policy, visit this page.</p>
                    </section>

                    <section className="flex flex-col items-center h-fit">
                        <img src={facebookIcon} style={{ margin: "1rem" }} alt="" width={20} />
                        <img src={X_TwitterIcon} style={{ margin: "1rem" }} alt="" width={20} />
                        <img src={InstagramIcon} style={{ margin: "1rem" }} alt="" width={20} />
                        <img src={LinkedinIcon} style={{ margin: "1rem" }} alt="" width={20} />
                    </section>
                </section>

            </section>
            <section className="w-[50%]  fixed right-0 min-h-screen">

                <MapGoogleApi lat={Location_Lat} lng={Location_Lng} />
            </section>
        </section>
    );
};



export default Redirect_Contact;