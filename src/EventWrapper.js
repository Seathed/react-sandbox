import { Link } from 'react-router-dom';

const EventWrapper = ({events, title, handleDelete}) => {

    return ( 
        <div className="eventWrapper">
        <h2>{ title }</h2>
        {events.map((e) => (
            <div className="event-preview" key={e.id}>
                <Link to={`/events/${ e.id }`}>
                <h2>{ e.title }</h2>
                <p>Hosted by: { e.host }</p>
                </Link>
            </div>
        ))}
    </div>
    );
}
 
export default EventWrapper;