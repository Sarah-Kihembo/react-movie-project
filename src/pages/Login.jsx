import React from "react";
import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";


function Login(){
return (
    <div className="bg-teal-900">
    <Header/>
        <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Login</h1>
        <div className="bg-teal-700">
            <form>
                <div className="mb-[2rem]">
                    <label className="ml-[45%] text-white font-sans text-xl font-bold" htmlFor="username">Username</label>
                    <input className="border-black ml-[2rem]" type="text" placeholder="username" id="username" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[45%] text-white font-sans text-xl font-bold" htmlFor="email">Email</label>
                    <input className="ml-[4.5rem]" type="email" placeholder="email" id="email" />
                </div>
                <div className="mb-[2rem]">
                    <label className="ml-[45%] text-white font-sans text-xl font-bold" htmlFor="password">Password</label>
                    <input className="mb-[rem] ml-[2.2rem]" type="password" placeholder="password" id="password" />
                </div>
                <div className="flex justify-around w-[13%] text-white text-2xl ml-[50%]">
                <p className="hover:cursor-pointer mb-[5rem] bg-red-900 p-2 rounded-md"><Link to="/https://www.goojara.to/">Login</Link></p>
            </div>
            </form>
        </div>
    <Footer/>
    </div>
  );
}

export default Login;