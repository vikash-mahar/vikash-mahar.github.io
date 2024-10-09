import React from "react";
import {Link,NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <header className="sticky z-50 top-0%">
            <div className="pt-10 flex flex-wrap justify-between items-center w-screen  py-6 px-10  bg-black text-amber-50">

                <Link to="/" className="flex no-underline items-center text-2xl ">
                   <h2>ProjectManager</h2>
                </Link>
                

                <div className="flex items-center justify-between">
                    <ul className="flex justify-between items-center gap-4 text-xl">
                        <li>
                            <NavLink to="/" className={({isActive})=>`py-2 no-underline px-3 pl-3 ${isActive?"text-orange-500 " : "text-white"} `}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/project1" className={({isActive}) =>`py-2 no-underline px-3 pl-3 ${isActive?"text-orange-500" : "text-white"} `}>Project 1</NavLink>
                        </li>

                        <li>
                            <NavLink to="/project2" className={({isActive})=>`py-2 no-underline px-3 pl-3 ${isActive?"text-orange-500" : "text-white"} `}>Project 2</NavLink>
                        </li>

                        <li>
                            <NavLink to="/project3" className={({isActive})=>`py-2 no-underline px-3 pl-3 ${isActive?"text-orange-500" : "text-white"} `}>Project 3</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-white no-underline hover:bg-orange-500 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white no-underline bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>

            </div>


        </header>
    );
}