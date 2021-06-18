import { useState } from 'react';

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
            <div className="eventWrapper">
                {events.map((e) => (
                    <div className="event-preview" key={e.id}>
                        <h2>{ e.title }</h2>
                        <p>Hosted by: { e.host }</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home;