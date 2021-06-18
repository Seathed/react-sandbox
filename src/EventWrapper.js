const EventWrapper = ({events, title}) => {

    return ( 
        <div className="eventWrapper">
        <h2>{ title }</h2>
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