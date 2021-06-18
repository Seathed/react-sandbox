const EventWrapper = ({events, title, handleDelete}) => {

    return ( 
        <div className="eventWrapper">
        <h2>{ title }</h2>
        {events.map((e) => (
            <div className="event-preview" key={e.id}>
                <h2>{ e.title }</h2>
                <p>Hosted by: { e.host }</p>
                <button onClick={() => handleDelete(e.id)}>Delete Event</button>
            </div>
        ))}
    </div>
    );
}
 
export default EventWrapper;