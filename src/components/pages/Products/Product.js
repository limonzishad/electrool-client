import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, description, img, pricePerUnit, quantity, availability, ratings } = product;
    const navigate = useNavigate();
    const showProductDetails = (id) => {
        navigate(`/purchase/${id}`);
    };
    return (
        <div className="card card-compact my-10 bg-base-100 shadow-2xl">
            <img className="object-cover" src={img} alt={name} />
            <div className="card-body">
                <h2 className="text-xl font-medium">{name}</h2>
                <p className="font-medium text-justify">Description: {description}</p>
                <p className="font-medium">Quantity: <span className="text-secondary">{quantity}</span></p>
                <p className="font-medium">Price per Unit: <span className="text-secondary text-xl">${pricePerUnit}</span></p>
                <p className="font-medium">Available: <span className="text-black text-lg">{availability}</span></p>
                <p className="font-medium text-center">Ratings: <span className="text-black text-lg">{ratings}</span></p>

                <div className="card-actions justify-end">
                    <button onClick={() => { showProductDetails(_id) }} className="w-full mx-auto btn btn-primary" disabled={availability === 'No'}>PURCHASE</button>
                </div>
            </div>
        </div >
    );
};

export default Product;