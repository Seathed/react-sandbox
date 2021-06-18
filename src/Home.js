import { useState } from 'react';
import { useEffect } from 'react';
import EventWrapper from './EventWrapper';

const Home = () => {

    const [events, setEvents] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    // [] only runs on initial page render
    // [events] runs on initial page render and anytime the events variable changes
    useEffect(() => {
        fetch('http://localhost:8000/events').then((res) => {
            return res.json();
        }).then((data) => {
            setEvents(data);
            setIsLoading(false);
        });
    }, []);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            {isLoading && <p>"Fetching Events...</p>}
            {events && <EventWrapper events={events} title="All Events"/>}
            {/*events && <EventWrapper events={events.filter((e) => e.host === 'Liam')} title="Liam's Events"/>*/}
        </div>
    );
}
 
export default Home;