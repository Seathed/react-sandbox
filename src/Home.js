import { useState } from 'react';
import { useEffect } from 'react';
import EventWrapper from './EventWrapper';
import useFetch from './useFetch';

const Home = () => {
    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    const {data:events, isLoading, error} = useFetch('http://localhost:8000/events');

    // [] only runs on initial page render
    // [events] runs on initial page render and anytime the events variable changes

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            {isLoading && <p>Fetching Events...</p>}
            {events && <EventWrapper events={events} title="All Events"/>}
            {/*events && <EventWrapper events={events.filter((e) => e.host === 'Liam')} title="Liam's Events"/>*/}
            {error && <div>{ error }</div>}
        </div>
    );
}
 
export default Home;