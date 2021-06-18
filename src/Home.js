import { useState } from 'react';
import { useEffect } from 'react';
import EventWrapper from './EventWrapper';

const Home = () => {

    const [events, setEvents] = useState(null);

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(e => e.id !== id));
    }

    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    // [] only runs on initial page render
    // [events] runs on initial page render and anytime the events variable changes
    useEffect(() => {
        fetch('http://localhost:8000/events').then((res) => {
            return res.json();
        }).then((data) => {
            setEvents(data);
        });
    }, []);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            {events && <EventWrapper events={events} title="All Events" handleDelete={ handleDeleteEvent }/>}
            {events && <EventWrapper events={events.filter((e) => e.host === 'Liam')} title="Liam's Events" handleDelete={ handleDeleteEvent }/>}
        </div>
    );
}
 
export default Home;