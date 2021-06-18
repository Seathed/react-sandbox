import { useState } from 'react';
import { useEffect } from 'react';
import EventWrapper from './EventWrapper';

const Home = () => {

    const [events, setEvents] = useState([
        {title: "First Event", body: "lorem ipsum...", host: "Abby", id: 1},
        {title: "Second Event", body: "lorem ipsum...", host: "Liam", id: 2},
        {title: "Third Event", body: "lorem ipsum...", host: "James", id: 3},
        {title: "Fourth Event", body: "lorem ipsum...", host: "Cheyenne", id: 4},
        {title: "Fifth Event", body: "lorem ipsum...", host: "Liam", id: 5},
    ]);

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(e => e.id !== id));
    }

    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    // [] only runs on initial page render
    useEffect(() => {
        console.log('use effect ran');
    }, [events]);

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            <EventWrapper events={events} title="All Events" handleDelete={ handleDeleteEvent }/>
            <EventWrapper events={events.filter((e) => e.host === 'Liam')} title="Liam's Events" />
        </div>
    );
}
 
export default Home;