import { useState, useEffect } from 'react';
import api from '../services/api';

const useGetReviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isNoContent, setIsNoContent] = useState(false);
    const [reviews, setReviews] = useState([]);

    const fetchReviews = () => {
        setIsError(false)
        setIsLoading(true);
        api('/reviews')
        .then(function(response) {
            if (response.status == 204) {
                setIsNoContent(true)
            }
            else {
                setIsNoContent(false)
                setReviews(response.data.reviews);
            }
        })
        .catch(function() {
            setIsError(true)
        })
        .then(function() {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchReviews();
    }, [])

    return {
        isLoading,
        isError,
        isNoContent,
        reviews,
        fetchReviews
    }
}

export default useGetReviews;