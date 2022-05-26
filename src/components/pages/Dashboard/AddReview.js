import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `https://murmuring-ocean-75671.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
            })
        navigate('/');
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">
                        <h1 className="text-center mt-5 text-xl font-bold">ADD REVIEW</h1>
                        <div className="card-body py-3">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Customer Name</span>
                                    </label>
                                    <input type="text" placeholder="Customer name" className="input input-bordered"
                                        {...register("customerName", { required: true })} />
                                    {errors.customerName?.type === 'required' && <span className="text-red-500 mt-2">Name field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label id="reviewRatings" className="label">
                                        <span className="label-text font-medium">Ratings</span>
                                    </label>
                                    <select id="reviewRatings" name="reviewRating" className="border rounded-lg p-3"{...register("reviewRating", { required: true })}>
                                        <option>---select rating---</option>
                                        <option value="1">1 Star</option>
                                        <option value="2">2 Star</option>
                                        <option value="3">3 Stars</option>
                                        <option value="4">4 Stars</option>
                                        <option value="5">5 Stars</option>
                                    </select>
                                    {errors.name?.type === 'required' && <span className="text-red-500 mt-2">Name field is
                                        empty.</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Review Description</span>
                                    </label>
                                    <textarea type="text" placeholder="Product description link" className="input input-bordered" {...register("reviewDescription", { required: true })} />
                                    {errors.reviewDescription?.type === 'required' && <span className="text-red-500 mt-2">Description field is empty.</span>}
                                </div>
                                <div className="form-control mt-2">
                                    <button type="submit" className="btn btn-primary font-medium">SUBMIT</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;