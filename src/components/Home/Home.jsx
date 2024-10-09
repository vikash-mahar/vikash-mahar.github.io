import React from "react";
import{Link,NavLink} from 'react-router-dom';
// import homeMain from './components/Home/img/homeMain.jpg'

export default function Home(){
    return(
        <>
        <div className=" text-center flex items-center  justify-center py-20 px-10 w-screen text-xl">
            <img className="h-80 w-3/6 " src="https://i.ibb.co/2M7rtLk/Remote1.png"></img>
            <h5 className="w-3/6">Welcome to my web development portfolio! As a passionate developer, I'm dedicated to crafting innovative and user-friendly web applications. Explore my projects to see how I leverage HTML, CSS, Tailwind, JavaScript, React and other technologies to create visually appealing and functional websites. Let's build something amazing together!</h5>
        </div>
        {/* <div className="text-5xl mx-10"><h1 >My Projects</h1></div> */}
        {/* <div className="flex justify-center gap-10 m-10 items-center ">
            
            <div  className="bg-gray-300 p-5 w-2/4 border-zinc-400 border-2">

                <h2 className="text-xl font-bold">Password Generator</h2>
                <p className="text-gray-700">Try our password generator today and boost your security. Protect your data with a strong, randomly generated password. Don't let weak passwords compromise your online safety. Create unique and complex passwords to protect your accounts.
                </p>
                
            </div>

            <div className="bg-gray-300 p-5 w-2/4 border-zinc-400 border-2">
                <h2 className="text-xl font-bold">Password Generator</h2>
                <p className="text-gray-700">Try our password generator today and boost your security. Protect your data with a strong, randomly generated password.</p>
                
            </div>

        </div> */}

        <div className="mx-8 mb-8 text-2xl">Welcome to my digital portfolio! This website showcases a collection of my personal projects, highlighting my skills and creativity. Explore my work and discover how I've applied my knowledge to bring these ideas to life. Feel free to reach out if you have any questions or would like to collaborate.</div>

        </>
    );
}