import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, description, pricePerUnit, quantity, availability, ratings } = product;
    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    });

    return (
        <div className="bg-base-200">
            <h1>Purchase</h1>
            <div className="card card-compact w-8/12 lg:w-6/12 mx-auto my-10 bg-base-100 shadow-2xl">
                <img className="object-cover" src={img} alt={name} />
                <div className="card-body">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="font-medium text-justify">Description: {description}</p>
                    <p className="font-medium">Quantity: <span className="text-secondary">{quantity}</span></p>
                    <p className="font-medium">Price per Unit: <span className="text-secondary text-xl">${pricePerUnit}</span></p>
                    <p className="font-medium">Available: <span className="text-black text-lg">{availability ? "Yes" : "No"}</span></p>
                    <p className="font-medium text-center">Ratings: <span className="text-black text-lg">{ratings}</span></p>
                    <div className="card-actions justify-end">
                        <button className="w-full mx-auto btn btn-primary">PURCHASE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;