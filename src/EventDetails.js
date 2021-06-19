import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';

const EventDetails = () => {
    const { id } = useParams();
    const {data:event, isLoading, error} = useFetch(`http://localhost:8000/events/${id}`);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`http://localhost:8000/events/${ id }`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/events');
        })
    }

    return (
        <div className="event-details">
            {isLoading && <div><p>Loading Event...</p></div>}
            {error && <div>{ error }</div>}
            {event && (
                <article>
                    <h2>{ event.title }</h2>
                    <p>Hosted by: { event.host }</p>
                    <div>{ event.body }</div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default EventDetails;