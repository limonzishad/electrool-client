import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const Login = () => {
    // login with email & password
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    // continue with google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessage;
    let loadingMessage;

    // save user
    const [token] = useToken(emailUser || googleUser);

    if (emailError || googleError) {
        errorMessage = <div>
            <p className="text-red-500 mt-2">Error: {emailError?.message || googleError?.message}</p>
        </div>
    }

    if (emailLoading || googleLoading) {
        loadingMessage = <p className="text-indigo-500 mt-2">Loading...</p>;
    }

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    return (
        <div className="h-screen flex justify-center items-center bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="card text-center text-xl font-medium">PLEASE LOGIN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email address" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email?.type === 'required' && <span className="text-red-500 mt-2">Email field is empty or invalid Email.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password?.type === 'required' && <span className="text-red-500 mt-2">Password field is empty or invalid Password.</span>}
                        </div>
                        <div className="form-control">
                            {errorMessage}
                            {loadingMessage}
                            <label className="label mt-2">
                                <p className="text-md">Don't have an account? <Link to="/register" className="label-text-alt link link-hover text-primary text-md font-medium">REGISTER</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn btn-primary font-medium">LOGIN</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline hover:btn-primary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;