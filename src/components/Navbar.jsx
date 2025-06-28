//navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import SampleData from "./SampleData";
export default function Navbar(){
    const [sampleanimation, setSampleAnimation] =useState(0)
    return (
        <nav>
            <div className="bg-gray-700 text-white font-semibold text-sm flex justify-center gap-10 p-2 caret-transparent
                            md:text-base md:p-3 md:gap-16
                            lg:text-lg lg:p-4 lg:gap-20">
            <Link to="/" className="hover:underline hover:scale-120 active:text-gray-300">Home</Link> 
            <Link to="/summary" className="hover:underline  hover:scale-120 active:text-gray-300">Summary</Link>
            <Link to="/about" className="hover:underline  hover:scale-120 active:text-gray-300">About</Link>
            <SampleData setSampleAnimation={setSampleAnimation} />
            <div className={`fixed top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-40 h-10 md:h-15 bg-gray-200 flex justify-center items-center border rounded-xl text-green-700 text-sm md:text-base lg:text-lg font-bold opacity-0  ${sampleanimation!== 0?"animate-slidein":""} caret-transparent
                            `} >
                <p>Sample Data Injected</p>
            </div>
            </div>
        </nav>
    );
}