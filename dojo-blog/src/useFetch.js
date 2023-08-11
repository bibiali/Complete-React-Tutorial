import { useEffect, useState } from "react";
const useFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(null);
    const [fetchError, setFetchError] = useState('');
  
  
    useEffect(() => {
        console.log('useFetch: use effect ran with', dataUrl);
        if (!dataUrl) {
            return;
        }
        fetch( dataUrl).then(res => {
            if (!res.ok) {
                throw Error('Could not fetch', res);
            }
            return res.json();
        }).then(data => {
            setIsPending(false);
            setData(data);
        }).catch(error => {
            setIsPending(false);
            setFetchError(error.message);
            console.error(error);
        });    
    }, [dataUrl]);

    return { data, isPending, fetchError }
};

export default useFetch;
