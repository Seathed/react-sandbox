const CreateEvent = () => {
    return ( 
        <div className="create-event">
            <h2>Create a New Event</h2>
            <form>
                <label>Event Title:</label>
                <input 
                type="text"
                required
                />
                <label>Start Time:</label>
                <input 
                type="datetime-local"
                required
                />
                <label>End Time:</label>
                <input 
                type="datetime-local"
                required
                />
                <label>Host:</label>
                <input 
                type="text"
                />
                <button>Create Event</button>
            </form>
        </div>
    );
}
 
export default CreateEvent;