import { useState, useEffect } from 'react';

const useFetch = (resource) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(resource).then((res) => {
            if(!res.ok) {
               throw Error('Could not fetch events from server.');
            }
            return res.json();
        }).then((data) => {
             setData(data);
             setIsLoading(false);
             setError(null);
        }).catch((err) => {
           setError(err.message);
           setIsLoading(false);
        })
   }, []);

   return {data, isLoading, error};
}

export default useFetch;