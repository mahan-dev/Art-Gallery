import React, { useState } from 'react';
import LockIcon from "../../assets/Register_icons/lock.svg";
import EmailIcon from "../../assets/Register_icons/envelope.svg";
import Styles from "../../Styles/Redirect_SignUp.module.css";
import { Link } from 'react-router-dom';

const Redirect_SignIn = () => {


    const [message, setMessage] = useState("")


    

    return (
        <section className=' h-screen flex items-center justify-center bg-slate-200 '>
            <section className={`${Styles.wrapper_SignForm} rounded-lg py-12 text-white`}>
                <p className='text-white text-2xl text-center'>Sign Up</p>
                <div className='flex flex-col mt-5 items-center relative'>

                    

                    <div className='mt-6'>

                        <div className='flex items-center rounded-md bg-white gap-2 px-2 py-2'>
                            <img src={EmailIcon} alt="" width={20} />
                            <input placeholder='Email' className={`${Styles.inputForm} outline-none text-black w-full `} type="email" />

                        </div>
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
                    <p className='text-base mr-2 text-center' > you don't have account yet ? </p> <Link to={"/SignUp"} className='text-base'>Sing Up</Link>

                </div>

            </section>
        </section>
    );
};

export default Redirect_SignIn;