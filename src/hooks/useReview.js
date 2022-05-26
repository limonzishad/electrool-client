import { useEffect, useState } from "react";

const useReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-ocean-75671.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReview(data));
    }, []);

    return [reviews, setReview];
}

export default useReview;