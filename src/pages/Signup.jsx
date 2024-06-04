import React from "react";
import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";


function Signup(){
return (
    <div className="bg-teal-900">
    <Header/>
        <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Signup</h1>
        <div className="bg-teal-900">
            <form>
            <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="username">Firstname</label>
                    <input className="ml-[5.9rem] border-black" type="text" placeholder="firstname" id="firstname" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="username">Surname</label>
                    <input className="ml-[6.3rem] border-black" type="text" placeholder="surname" id="surrname" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="username">Username</label>
                    <input className="ml-[5.8rem] border-black" type="text" placeholder="username" id="username" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="email">Email</label>
                    <input className="ml-[8.4rem]" type="email" placeholder="email" id="email" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="password">Create Password</label>
                    <input className="ml-[2rem]" type="password" placeholder="createpassword" id="createpassword" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[40%] text-white font-sans text-xl font-bold" htmlFor="password">Confirm Password</label>
                    <input className="ml-[1rem]" type="password" placeholder="createpassword" id="confirmpassword" />
                </div>
                <div className="flex justify-around w-[13%] text-white text-2xl ml-[50%]">
                <p className="hover:cursor-pointer mb-[5rem] bg-red-900 p-2 rounded-md"><Link to="/https://www.goojara.to/">Signup</Link></p>
                </div>
            </form>
        </div>
    <Footer/>
    </div>
  );
}

export default Signup;