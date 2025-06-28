//navbar.jsx
import { Link } from "react-router-dom";
import SampleData from "./SampleData";
export default function Navbar(){
    return (
        <nav>
            <div className="bg-gray-700 text-white font-semibold text-sm flex justify-center gap-10 p-2 caret-transparent
                            md:text-base md:p-3 md:gap-16
                            lg:text-lg lg:p-4 lg:gap-20">
            <Link to="/" className="hover:underline hover:scale-120 active:text-gray-300">Home</Link> 
            <Link to="/summary" className="hover:underline  hover:scale-120 active:text-gray-300">Summary</Link>
            <Link to="/about" className="hover:underline  hover:scale-120 active:text-gray-300">About</Link>
            <SampleData />
            </div>
        </nav>
    );
}