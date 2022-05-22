import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, sendEmailVerification, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init";
import { ToastContainer } from 'react-toastify';

const Register = () => {
    let errorMessage;
    let loadingMessage;

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendEmailVerification] = useSendEmailVerification(auth);

    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
    };

    const navigateToLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    if (error) {
        errorMessage = <div>
            <p className="text-danger text-center">Error: {error.message}</p>
        </div>
    }

    if (loading) {
        loadingMessage = <p className="text-info text-center">Loading...</p>;
    }

    return (
        <div className="h-screen flex justify-center items-center bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-center font-medium">PLEASE REGISTER</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="Email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label mt-2">
                            <p className="text-md">Already have an account? <Link to="/login" className="label-text-alt link link-hover text-primary text-md font-medium">LOGIN</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary font-medium">SUBMIT</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-glass hover:btn-accent">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;