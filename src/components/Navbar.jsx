//navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <Link to="/">Home</Link> 
            <Link to="/summary">Summary</Link>
        </nav>
    );
}