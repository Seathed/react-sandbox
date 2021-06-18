import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Calendar</h1>
            <div className="links">
                <a href="/">Home</a>
                <Link to="/events/create">New Event</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;