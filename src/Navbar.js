import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Calendar</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link to="/events">Events</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;