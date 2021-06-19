import { useState } from "react";

const CreateEvent = () => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [host, setHost] = useState('');

    return ( 
        <div className="create-event">
            <h2>Create a New Event</h2>
            <form>
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
                <button>Create Event</button>
            </form>
        </div>
    );
}
 
export default CreateEvent;