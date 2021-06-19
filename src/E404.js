import { Link } from 'react-router-dom';

const E404 = () => {
    return ( 
        <div className="404">
            <h2>404</h2>
            <p>That resource cannot be found.</p>
            <Link to="/">Back to homepage...</Link>
        </div>
    );
}
 
export default E404;