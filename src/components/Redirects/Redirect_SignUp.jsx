import React from 'react';
import Styles from "../../Styles/Redirect_SignUp.module.css";
import { Link } from 'react-router-dom';


const Redirect_SignUp = () => {
    return (
        <section className=' h-screen flex items-center justify-center bg-slate-200 '>
            <section className={`${Styles.wrapper_SignForm} rounded-lg py-12 text-white`}>
                <p className='text-white text-2xl text-center'>Sign Up</p>
                <div className='flex flex-col mt-4 items-center'>
                    <div className='mt-4'><label className='text-white text-lg mr-3'  > email </label><input className={`${Styles.inputForm} outline-none rounded-md text-black `} type="email" /></div>
                    <div className='mt-4'><label className='text-white text-lg mr-3'  > password </label><input className={`${Styles.inputForm} outline-none rounded-md text-black `} type="password" /></div>
                </div>
                <div className='flex justify-center mt-4'>
                    <p className='text-base mr-2' >you don't have account yet ? </p> <Link className='text-base'>Sing In</Link>

                </div>

            </section>
        </section>
    );
};

export default Redirect_SignUp;