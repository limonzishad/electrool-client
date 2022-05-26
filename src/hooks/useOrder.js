import { useEffect, useState } from "react";

const useOrder = () => {
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-ocean-75671.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => setOrder(data));
    }, []);

    return [orders, setOrder];
}

export default useOrder;