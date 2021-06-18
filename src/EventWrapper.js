const EventWrapper = (props) => {
    const events = props.events;
    return ( 
        <div className="eventWrapper">
        {events.map((e) => (
            <div className="event-preview" key={e.id}>
                <h2>{ e.title }</h2>
                <p>Hosted by: { e.host }</p>
            </div>
        ))}
    </div>
    );
}
 
export default EventWrapper;