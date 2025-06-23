//navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <div className="bg-gray-500 text-white flex justify-center gap-8">
            <Link to="/" className="hover:underline active:text-gray-300">Home</Link> 
            <Link to="/summary" className="hover:underline active:text-gray-300">Summary</Link>
            </div>
        </nav>
    );
}