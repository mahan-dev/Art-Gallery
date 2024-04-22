import React, { useEffect, useRef, useState } from 'react';
import Styles from "../../Styles/Redirect_Exhibitions_Footer.module.css"





// Importing Icons Footer

import facebookIcon from "../../assets/images/redirectExhibitonsIcons/facebook-f.svg";
import X_TwitterIcon from "../../assets/images/redirectExhibitonsIcons/x-twitter.svg";
import InstagramIcon from "../../assets/images/redirectExhibitonsIcons/instagram.svg";
import LinkedinIcon from "../../assets/images/redirectExhibitonsIcons/linkedin.svg";
import SendIcon from "../../assets/images/redirectExhibitonsIcons/sendIcon.svg";

//

const Redirect_Exhibitions_Footer = ({ className }) => {

    //Refs
    const email_Input_Ref = useRef(null);
    const emailMessage_Ref = useRef(null);
    //Refs

    //States
    const [email, setEmail] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    //States

    const [errorMessage, setErrorMessage] = useState("")
    const handleEmailValidation = (event) => {

        const newEmail = event.target.value;
        setEmail(newEmail);

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(newEmail);
        setIsValidEmail(isValidEmail);

        if (isValidEmail) {
            setErrorMessage("email is valid");
        }
        else if (!isValidEmail && newEmail === "") {
            setErrorMessage("you must enter something");
        }
        else {
            setErrorMessage("email is not valid");
        }
    }

    const handleSubmit = (event) => {
        let emailValue = email_Input_Ref.current.value;
        event.preventDefault();
        if (emailValue === "") {

            setErrorMessage("is empty and nothing to send");
        } else if (email_Input_Ref.current.value !== "" && isValidEmail) {
            emailMessage_Ref.current.innerHTML = "email has been send successfully ";
        } else {
            emailMessage_Ref.current.innerHTML = "please enter a valid email address ";
        }
    }

    // let bool = false;
    const [bool, setBool] = useState(false)
    const handleClick = (event) => {
        const inputValue = emailMessage_Ref.current.value;
        if (inputValue === "" && !email_Input_Ref.current.contains(event.target)) {
            return;
        }
        setBool(true)

    }

    const handleClickOutti = (event) => {
        if (bool && !email_Input_Ref.current.contains(event.target)) {
            setErrorMessage("you must enter something");
            // console.log("is running this part ")
        }
    }
    useEffect(() => {

        const addEventListener = () => {
            document.addEventListener("click", handleClickOutti);

        }
        const removeEventListener = () => {
            document.addEventListener("click", handleClickOutti);

        }
        addEventListener();

        return () => {
            removeEventListener();
        }

    }, [emailClick, email, bool]);




    return (
        <section className={`footer_Wrapper ${className}`}>
            <section id="Redirect_footer_Exhibitions" className='' >

                <section className={`${Styles.font_size} mb-4 section-left`}>
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

                <section className= {`${Styles.font_size} mb-4   section-middle`}>
                    <h2 className= "mb-6" >Press Enquiries</h2>
                    <p>For all press enquiries please contact us at;</p>
                    <p>+44 020 7494 2035</p>
                    <a>press@unitlondon.com</a>
                </section>

                <section className={`${Styles.font_size} mb-4 section-right`} >
                    <h2 className='mb-6'>Stay in touch</h2>


                    <section className={`${Styles.icons_wrapper} flex mb-6 items-center`}>

                        <img src={facebookIcon} alt="" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
                        <img src={X_TwitterIcon} alt="" style={{ width: "30px", height: "30px", cursor: "pointer" }} className='ml-2' />
                        <img src={InstagramIcon} alt="" style={{ width: "30px", height: "30px", cursor: "pointer" }} className='ml-2' />
                        <img src={LinkedinIcon} alt="" style={{ width: "30px", height: "30px", cursor: "pointer" }} className='ml-2' />
                    </section>

                    <form action="" className='' onSubmit={handleSubmit}>
                        <section className='max-w-max gap-2 flex items-center '>
                            <input className={`${Styles.input_email}  items-center justify-center`}
                                ref={email_Input_Ref}
                                onChange={handleEmailValidation}
                                type="email"
                                name=""
                                id="emailInput"
                                onClick={handleClick}
                                placeholder='join our mail-list'
                            />
                            <button type='submit' className='w-max'>
                                <img src={SendIcon} className='' style={{ width: '20px' }} />
                            </button>

                        </section>
                    </form>
                    <span ref={emailMessage_Ref} className='w-[200px] inline-block text-nowrap' >{errorMessage}</span>

                </section>
            </section>
        </section>
    );
};

export default Redirect_Exhibitions_Footer;