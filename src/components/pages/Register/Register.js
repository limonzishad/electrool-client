import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import useToken from '../../../hooks/useToken';
import auth from '../../../firebase.init';
// import { ToastContainer } from 'react-toastify';

const Register = () => {
    // register with email & password
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await sendEmailVerification();
        await updateProfile({ displayName: data.name });
    };

    // continue with google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // save user
    const [token] = useToken(emailUser || googleUser);

    // update user profile
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessage;
    let loadingMessage;

    if (emailError || googleError || updatingError) {
        errorMessage = <div>
            <p className="text-red-500 mt-2">Error: {emailError?.message || googleError?.message}</p>
        </div>
    }

    if (emailLoading || googleLoading || updating) {
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
                    <h2 className="text-center text-xl font-medium">PLEASE REGISTER</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="name" placeholder="Full name" className="input input-bordered"
                                {...register("name", { required: true })} />
                            {errors.name?.type === 'required' && <span className="text-red-500 mt-2">Name field is
                                empty.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email address" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email?.type === 'required' && <span className="text-red-500 mt-2">Email field is empty.</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password?.type === 'required' && <span className="text-red-500 mt-2">Password field is empty.</span>}
                        </div>
                        <div className="form-control">
                            {errorMessage}
                            {loadingMessage}
                            <label className="label mt-2">
                                <p className="text-md">Already have an account? <Link to="/login" className="label-text-alt link link-hover text-primary text-md font-medium">LOGIN</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn btn-primary font-medium">SUBMIT</button>
                        </div>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline hover:btn-primary">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;