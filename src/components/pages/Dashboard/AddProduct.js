import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `https://murmuring-ocean-75671.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate('/dashboard/manageproducts');
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shadow-2xl bg-base-100">
                        <h1 className="text-center mt-5 text-xl font-bold">ADD PRODUCT</h1>
                        <div className="card-body py-3">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Name</span>
                                    </label>
                                    <input type="text" placeholder="Product name" className="input input-bordered"
                                        {...register("name", { required: true })} />
                                    {errors.name?.type === 'required' && <span className="text-red-500 mt-2">Name field is
                                        empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Price (Per Unit)</span>
                                    </label>
                                    <input type="text" placeholder="Product price" className="input input-bordered"
                                        {...register("pricePerUnit", { required: true })} />
                                    {errors.pricePerUnit?.type === 'required' && <span className="text-red-500 mt-2">Price (Per Unit) field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Product quantity" className="input input-bordered"
                                        {...register("quantity", { required: true })} />
                                    {errors.quantity?.type === 'required' && <span className="text-red-500 mt-2">Quantity field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Minimum order</span>
                                    </label>
                                    <input type="number" placeholder="Minimum order" className="input input-bordered"
                                        {...register("minOrder", { required: true })} />
                                    {errors.minOrder?.type === 'required' && <span className="text-red-500 mt-2">Minimum order field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Product image</span>
                                    </label>
                                    <input type="text" placeholder="Provide image link" className="input input-bordered"
                                        {...register("img", { required: true })} />
                                    {errors.availability?.type === 'required' && <span className="text-red-500 mt-2">Image field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Availability</span>
                                    </label>
                                    <input type="text" placeholder="Type 'Yes' or 'No'" className="input input-bordered"
                                        {...register("availability", { required: true })} />
                                    {errors.availability?.type === 'required' && <span className="text-red-500 mt-2">Availability field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Ratings</span>
                                    </label>
                                    <input type="text" placeholder="Demo (4/5)" className="input input-bordered"
                                        {...register("ratings", { required: true })} />
                                    {errors.ratings?.type === 'required' && <span className="text-red-500 mt-2">Ratings field is empty.</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product description</span>
                                    </label>
                                    <textarea type="text" placeholder="Product description link" className="input input-bordered" {...register("description", { required: true })} />
                                    {errors.description?.type === 'required' && <span className="text-red-500 mt-2">Description field is empty.</span>}
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

export default AddProduct;