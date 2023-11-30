import { useState, useEffect } from "react";

const useFetch = (url, updateFlag) => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}).then((res) => {
                if(res.ok !== true) {
                    throw Error('error chego to tam');
                }
                return res.json();
            }).then((data) => {
                
                setPosts(data);
                setIsLoading(false);
                setError(null);
            }).catch((err) => {
                setError(err.message)
                setIsLoading(false);
            });
        }, 300);

        return () => {
            abortCont.abort();
        }
    }, [updateFlag]);

    return {posts, isLoading, error}
};

export default useFetch;

