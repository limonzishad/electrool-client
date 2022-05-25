import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { name, img, description, pricePerUnit, quantity, availability, ratings, minOrder } = product;
    useEffect(() => {
        const url = `https://murmuring-ocean-75671.herokuapp.com/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    });

    const onSubmit = (data) => {
        console.log(data);
        // const url = `https://murmuring-ocean-75671.herokuapp.com/product`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //     })
        // //navigate('/dashboard/manageproducts');
    };

    return (
        <div className="bg-base-200">
            <div className="card card-compact w-8/12 lg:w-6/12 mx-auto my-10 bg-base-100 shadow-2xl">
                <img className="object-cover" src={img} alt={name} />
                <div className="card-body">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="font-medium text-justify">Description: {description}</p>
                    <p className="font-medium">Quantity: <span className="text-secondary">{quantity}</span></p>
                    <p className="font-medium">Price per Unit: <span className="text-secondary text-xl">${pricePerUnit}</span></p>
                    <p className="font-medium">Available: <span className="text-black text-lg">{availability ? "Yes" : "No"}</span></p>
                    <p className="font-medium text-center">Ratings: <span className="text-black text-lg">{ratings}</span></p>
                    <div className="divider">OR</div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-center mt-5 text-xl font-bold">FILL THIS FORM TO ORDER</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Customer name" className="input input-bordered"
                                {...register("customerName", { required: true })} />
                            {errors.customerName?.type === 'required' && <span className="text-red-500 mt-2">Name field is
                                empty.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" value={user.email}
                                {...register("customerEmail", { required: true })} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Address</span>
                            </label>
                            <input type="text" placeholder="Customer address" className="input input-bordered"
                                {...register("address", { required: true })} />
                            {errors.address?.type === 'required' && <span className="text-red-500 mt-2">Price (Per Unit) field is empty.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Phone/Mobile</span>
                            </label>
                            <input type="text" placeholder="Phone/Mobile number" className="input input-bordered"
                                {...register("phone", { required: true })} />
                            {errors.phone?.type === 'required' && <span className="text-red-500 mt-2">Quantity field is empty.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Order quantity</span>
                            </label>
                            <input type="number" placeholder={minOrder} min={minOrder} max={quantity} className="input input-bordered"
                                {...register("orderQuantity", { required: true })} />
                            {errors.orderQuantity?.type === 'required' && <span className="text-red-500 mt-2">Quantity field is empty.</span>}
                        </div>
                        <div className="card-actions justify-end mt-5">
                            <button type="submit" className="w-full mx-auto btn btn-primary">ORDER</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchase;