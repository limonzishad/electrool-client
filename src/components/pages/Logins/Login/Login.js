import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="h-screen flex justify-center items-center bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-center font-medium">PLEASE LOGIN</h2>
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
                            <p className="text-md">Don't have an account? <Link to="/register" className="label-text-alt link link-hover text-primary text-md font-medium">REGISTER</Link></p>
                        </label>
                        <label className="label">
                            <p className="text-md">Forgot password? <Link to="" className="label-text-alt link link-hover text-primary text-md font-medium">RESET PASSWORD</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className="btn btn-primary font-medium">LOGIN</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className="btn btn-glass hover:btn-accent">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;