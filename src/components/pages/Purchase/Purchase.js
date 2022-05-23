import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    });

    return (
        <div>
            <h1>Purchase</h1>
            <div className="cards-container">
                <img src={product.img} alt={product.name} />
                <h5 className="mt-4">{product.name}</h5>
            </div>
            <p className="item-text">Model: {product.name}</p>
            <p className="item-text">Price: {product.quantity}</p>
        </div>
    );
};

export default Purchase;