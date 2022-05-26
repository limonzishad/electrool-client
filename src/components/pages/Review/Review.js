import React from "react";

const Review = ({ review }) => {
    const { customerName, reviewDescription, reviewRating } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{customerName}</h2>
                <p className="text-justify font-medium">Comment: {reviewDescription}</p>
                <p className="font-medium">Rating: {reviewRating}</p>
            </div>
        </div>
    );
};

export default Review;