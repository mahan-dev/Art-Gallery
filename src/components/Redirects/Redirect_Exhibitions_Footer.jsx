import React, { useEffect, useRef, useState } from 'react';
import Styles from "../../Styles/Redirect_Exhibitions_Footer.module.css"





// Importing Icons Footer

import facebookIcon from "../../assets/images/redirectExhibitonsIcons/facebook-f.svg";
import X_TwitterIcon from "../../assets/images/redirectExhibitonsIcons/x-twitter.svg";
import InstagramIcon from "../../assets/images/redirectExhibitonsIcons/instagram.svg";
import LinkedinIcon from "../../assets/images/redirectExhibitonsIcons/linkedin.svg";
import SendIcon from "../../assets/images/redirectExhibitonsIcons/sendIcon.svg";

//


const Redirect_Exhibitions_Footer = () => {

    //Refs
    const email_Input_Ref = useRef(null);
    const emailMessage_Ref = useRef(null);
    //Refs

    //States
    const [email, setEmail] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    //States


    const handleEmailValidation = (event) => {
        // console.log(event.target.value);
        const newEmail = event.target.value;
        setEmail(newEmail);

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(newEmail)
        setIsValidEmail(isValidEmail)

        if (isValidEmail) {
            emailMessage_Ref.current.innerHTML = "email is valid";
        }
        else {
            emailMessage_Ref.current.innerHTML = "email is not valid";
        }
    }


    const [bool, setBool] = useState(false);
    const EmailClickHandler = (event) => {

        const inputValue = email_Input_Ref.current.value.trim();

        if (email_Input_Ref.current.contains(event.target)) {
            if (inputValue === "") {
                // console.log("Input is empty but clicked inside");
                setBool(true)
                // console.log(bool);
                // } else { console.log("Input is not empty and clicked inside") }
                // console.log(bool);
            }

            // else {
            //     // console.log("click  outttttttt")
            // }

            if (inputValue === "" && !email_Input_Ref.current.contains(event.target) && bool) {
                emailMessage_Ref.current.innerHTML = "you must enter something";
                // console.log(bool);
            }
        }
    }
    const handleSubmit = (event) => {
        let emailValue = email_Input_Ref.current.value;
        event.preventDefault();


        if (emailValue === "") {
            emailMessage_Ref.current.innerHTML = "is empty and nothing to send";
        } else if (email_Input_Ref.current.value !== "" && isValidEmail) {
            emailMessage_Ref.current.innerHTML = "email has been send successfully ";
        } else {
            emailMessage_Ref.current.innerHTML = "please enter a valid email address ";
        }


    }

    useEffect(() => {

        document.addEventListener("click", EmailClickHandler);
        // console.log(emailClick)
        return () => {
            document.removeEventListener("click", EmailClickHandler);
        }

    }, [emailClick, bool, email]);

    return (
        <section className='fixed z-10 w-full'>
            <section id="Redirect_footer_Exhibitions" >

                <section className='mb-4 section-left'>
                    <h2 className='mb-6'>Unit, Mayfair</h2>
                    <div>
                        <p>3 Hanover Square, Mayfair, W1S 1HD</p>
                    </div>

                    <div className='mb-4'>
                        <p>
                            Opening times: <br />
                            Mon–Sat, 10am–7pm, <br />
                            Sunday, 12pm-6pm <br />
                        </p>
                    </div>


                    <p>No booking required.</p>
                    <div className='mb-4'>
                        <p>
                            +44 (0) 20 7494 2035 <br />
                            art@unitlondon.com <br />
                        </p>
                    </div>


                    <p>For the gallery’s Terms of Service, please visit this page.</p>
                    <p>For Our Cookies Policy, visit this page</p>

                </section>

                <section className='mb-4   section-middle'>
                    <h2 className='mb-6'>Press Enquiries</h2>
                    <p>For all press enquiries please contact us at;</p>
                    <p>+44 020 7494 2035</p>
                    <p>press@unitlondon.com</p>
                </section>

                <section className='mb-4 section-right' >
                    <h2 className='mb-6'>Stay in touch</h2>



                    <form action="" onSubmit={handleSubmit}>
                        <section className='max-w-max relative'>
                            <input className={`${Styles.input_email} items-center justify-center`}
                                ref={email_Input_Ref}
                                onChange={handleEmailValidation}
                                type="email"
                                name=""
                                id="emailInput"
                                onClick={EmailClickHandler}
                                placeholder='join our mail-list'
                            />
                            <button type='submit'>
                                <img src={SendIcon} className='' style={{ width: "20px", height: "20px", cursor: "pointer", position: 'absolute', right: "3px", top: "2px" }} />
                            </button>

                        </section>
                    </form>
                    <span ref={emailMessage_Ref}></span>

                    <section className={`${Styles.icons_wrapper} flex  items-center`}>

                        <img src={facebookIcon} alt="" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                        <img src={X_TwitterIcon} alt="" style={{ width: "20px", height: "20px", cursor: "pointer" }} className='ml-2' />
                        <img src={InstagramIcon} alt="" style={{ width: "20px", height: "20px", cursor: "pointer" }} className='ml-2' />
                        <img src={LinkedinIcon} alt="" style={{ width: "20px", height: "20px", cursor: "pointer" }} className='ml-2' />
                    </section>
                </section>

            </section>
        </section>


    );
};

export default Redirect_Exhibitions_Footer;