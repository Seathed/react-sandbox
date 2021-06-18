import EventWrapper from './EventWrapper';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const {data:events, isLoading, error} = useFetch('http://localhost:8000/events');

    // [] only runs on initial page render
    // [events] runs on initial page render and anytime the events variable changes

    return ( 
        <div className="home">

        </div>
    );
}
 
export default Home;