import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <link href="https://cdn.syncfusion.com/ej2/material.css" rel="stylesheet" type="text/css"></link>
            <h1>Calendar</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link to="/events">Events</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;