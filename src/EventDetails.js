import { useParams } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    return (
        <div className="event-details">
            <h2>Event Details - #{ id }</h2>
        </div>
    );
}
 
export default EventDetails;