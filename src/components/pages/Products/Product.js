import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { _id, name, description, img, pricePerUnit, quantity, availability } = product;
    const navigate = useNavigate();
    const showProductDetails = (id) => {
        navigate(`/purchase/${id}`);
    };
    return (
        <div className="card card-compact w-96 mx-auto my-5 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="">Description: {description}</p>
                <p className="">Stock: {quantity}</p>
                {/* <p className="">Price: {pricePerUnit}</p> */}
                <div className="card-actions justify-end">
                    <button onClick={() => { showProductDetails(_id) }} className="w-full mx-auto btn btn-primary">PURCHASE</button>
                </div>
            </div>
        </div>
    );
};

export default Product;