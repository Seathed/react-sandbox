import { useState } from 'react';
import EventWrapper from './EventWrapper';

const Home = () => {

    const [events, setEvents] = useState([
        {title: "First Event", body: "lorem ipsum...", host: "Liam", id: 1},
        {title: "Second Event", body: "lorem ipsum...", host: "Liam", id: 2},
        {title: "Third Event", body: "lorem ipsum...", host: "Liam", id: 3},
    ]);

    const [pageStateText, setPageStateText] = useState("Hello, this is the default page state.");

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ pageStateText }</p>
            <EventWrapper events={events} />
        </div>
    );
}
 
export default Home;