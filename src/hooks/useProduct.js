import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://murmuring-ocean-75671.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);
    return [products, setProduct];
}

export default useProduct;