import { useState, useEffect } from 'react';

const useFetch = (resource) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();

        fetch(resource, { signal:abort.signal }).then((res) => {
            if(!res.ok) {
               throw Error('Could not fetch events from server.');
            }
            return res.json();
        }).then((data) => {
             setData(data);
             setIsLoading(false);
             setError(null);
        }).catch((err) => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setError(err.message);
                setIsLoading(false);
            }
        })
        return () => abort.abort;
   }, [resource]);

   return {data, isLoading, error};
}

export default useFetch;