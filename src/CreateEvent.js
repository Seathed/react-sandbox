import { useState } from "react";
import { useHistory } from 'react-router-dom';

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [host, setHost] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = { title, startTime, endTime, host };
        setIsLoading(true);
        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(event)
        }).then((res) => {
            return res.json();
        }).then((data) => {
            const id = data.id;
            setIsLoading(false);
            history.push(`/events/${ id }`);
        })
    }

    return ( 
        <div className="create-event">
            <h2>Create a New Event</h2>
            <form onSubmit={handleSubmit}>
                <label>Event Title:</label>
                <input 
                type="text"
                required
                value={ title }
                onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Start Time:</label>
                <input 
                type="datetime-local"
                required
                value={ startTime }
                onChange={(e) => {setStartTime(e.target.value)}}
                />
                <label>End Time:</label>
                <input 
                type="datetime-local"
                required
                value={ endTime }
                onChange={(e) => {setEndTime(e.target.value)}}
                />
                <label>Host:</label>
                <input 
                type="text"
                value={ host }
                onChange={(e) => {setHost(e.target.value)}}
                />
                { !isLoading && <button>Create Event</button> }
                { isLoading && <button disabled>Adding Event...</button> }
            </form>
        </div>
    );
}
 
export default CreateEvent;