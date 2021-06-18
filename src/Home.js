import EventWrapper from './EventWrapper';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const {data:events, isLoading, error} = useFetch('http://localhost:8000/events');

    // [] only runs on initial page render
    // [events] runs on initial page render and anytime the events variable changes

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <Link to="/events/create" className="btn btn=primary">Create Event</Link>
            {isLoading && <p>Fetching Events...</p>}
            {events && <EventWrapper events={events} title="All Events"/>}
            {/*events && <EventWrapper events={events.filter((e) => e.host === 'Liam')} title="Liam's Events"/>*/}
            {error && <div>{ error }</div>}
        </div>
    );
}
 
export default Home;