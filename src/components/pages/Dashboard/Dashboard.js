import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 p-5">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">MENU</label>
                    <h1 className="text-secondary text-center font-medium text-2xl">DASHBOARD</h1>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-3 overflow-y-auto w-48 bg-base-100 text-base-content gap-y-2">
                        {!admin && <li><NavLink to="/dashboard/my-orders">MY ORDERS</NavLink></li>}
                        {admin && <li><NavLink to="/dashboard/add-products">ADD PRODUCT</NavLink></li>}
                        {!admin && <li><NavLink to="/dashboard/add-review">ADD REVIEW</NavLink></li>}
                        {admin && <li><NavLink to="/dashboard/manage-orders">MANAGE ORDERS</NavLink></li>}
                        {admin && <li><NavLink to="/dashboard/manage-products">MANAGE PRODUCTS</NavLink></li>}
                        <li><NavLink to="/dashboard/my-profile">MY PROFILE</NavLink></li>
                        {admin && <li><NavLink to="/dashboard/all-users">ALL USERS</NavLink></li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;