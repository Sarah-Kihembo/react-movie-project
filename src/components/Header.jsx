import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    
    return (
        <header className="bg-red-900 text-white flex justify-around m-auto items-center p-8 w-[90%] m-auto phone:flex-wrap">
            <h1 className="text-3xl italic">Kids</h1>
            <nav className="w-1/3 text-2xl">
                <ul className="flex justify-around phone:flex-wrap">
                    <li className="hover:cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:cursor-pointer"><Link to="/Scifi">Scifi</Link></li>
                    <li className="hover:cursor-pointer"><Link to="/Action">Action</Link></li>
                </ul>
            </nav>
           <div className='flex flex-row-reverse'>
            <div className="flex justify w-[13%] text-xl items-center mr-[2rem]">
                <p className="hover:cursor-pointer bg-teal-700 p-2 rounded-md"><Link to="/Signup">Signup</Link></p>
            </div>
            </div>
        </header>
    )
}

export default Header;