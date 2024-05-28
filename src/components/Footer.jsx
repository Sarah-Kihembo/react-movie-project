import React from "react";
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-red-900 text-white justify-around items-center p-4 m-auto ">
            <section className="flex justify-between">
            <div className="w-1/3 text-xl">
                <ul className="">
                    <li><i className='bx bxl-medium-square'></i>SarahKihembo</li>
                    <li><i className='bx bxl-linkedin-square'></i>SarahKihembo</li>
                    <li><i className='bx bxl-facebook-square'></i>SarahKihembo</li>

                </ul>
            </div>
            
            <div className="flex justify-around w-[13%] text-2xl mr-[10%] items-center">
                <p className="hover:cursor-pointer bg-teal-700 p-2  rounded-md"><Link to="/Login">Login</Link></p>
            </div>
            </section>
            <div>
                <p className="text-center">&copy; SarahKihembo</p>
            </div>
        </footer>
    )
}

export default Footer;











