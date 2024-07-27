import React, { useState, useEffect } from 'react';
import Styles from "../../Styles/Redirect_SignUp.module.css";
import { Link } from 'react-router-dom';

import LockIcon from "../../assets/Register_icons/lock.svg";
import EmailIcon from "../../assets/Register_icons/envelope.svg";
import UserIcon from "../../assets/Register_icons/user.svg";
import PhoneIcon from "../../assets/Register_icons/phone.svg";





const Redirect_SignUp = () => {
    const [message, setMessage] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [email, setEmail] = useState("");
    const [trackMessage, setTrackMessage] = useState(false);
    const [validEmail, setValidEmail] = useState(false)
    const [emailMessage, setEmailMessage] = useState("");
    
    const userNameInputHandler = (event) => {
        let input = event.target.value;
        setInputValue(input);
        if(input.length >=1 && input.length <5) {
            setTrackMessage(true);
            setMessage("username can't be less than 5 character")
        } else { 
            setMessage("") 
            setTrackMessage(false)
        }
    }

    let emailValue = "";

    const emailHandler =(event)=>{
        emailValue = event.target.value;
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValid = regexEmail.test(emailValue);
        setValidEmail(isValid)
        setEmail(emailValue);
        console.log(validEmail)

            if(isValid){
                setEmailMessage("is valid Email")
            }
            else {
                setEmailMessage("is Not valid Email")
            }
    }



    useEffect(() => {
        
        return () => {
            
        };
    }, [message, email]);


    return (
        <section className=' h-screen flex items-center justify-center bg-slate-200 '>
            <section className={`${Styles.wrapper_SignForm} rounded-lg py-12 text-white`}>
                <p className='text-white text-2xl text-center'>Sign Up</p>
                <div className='flex flex-col mt-5 items-center relative'>

                    <div>
                        <div className={`${trackMessage ? Styles.SignForm_input_wrapper : Styles.SignForm_input_wrapper_deactive} flex items-center rounded-md bg-white gap-2 px-2 py-2`}>
                            <img src={UserIcon} alt="" width={20} />
                            <input onChange={userNameInputHandler} placeholder='Username' className={`${Styles.inputForm} outline-none text-black w-full `} type="email" />

                        </div>
                        <p>{message}</p>
                    </div>

                    <div className='mt-6'>
                        <div className='flex items-center rounded-md bg-white gap-2 px-2 py-2'>
                            <img src={PhoneIcon} alt="" width={20} />
                            <input placeholder='Phone number' className={`${Styles.inputForm} outline-none text-black w-full `} type="email" />

                        </div>
                    </div>

                    <div className='mt-6'>

                        <div className='flex items-center rounded-md bg-white gap-2 px-2 py-2'>
                            <img src={EmailIcon} alt="" width={20} />
                            <input placeholder='Email' onChange={emailHandler} className={`${Styles.inputForm} outline-none text-black w-full `} type="email" />

                        </div>
                            <p>{emailMessage}</p>
                    </div>

                    <div className='mt-6'>
                        <div className='flex items-center rounded-md bg-white gap-2 px-2 py-2'>
                            <img src={LockIcon} width={20} alt="" />
                            <input placeholder='Password' className={`${Styles.inputForm} outline-none  text-black w-full  `} type="password" />
                        </div>
                    </div>

                </div>
                <div className='flex justify-center mt-4 flex-wrap'>
                    {/* <p className='text-base mr-2' >you don't have account yet ? </p> <Link className='text-base'>Sing In</Link> */}
                    <p className='text-base mr-2 text-center' >you have an account ? </p> <Link to={"/SignIn"} className='text-base'>Sing In</Link>

                </div>

            </section>
        </section>
    );
};

export default Redirect_SignUp;