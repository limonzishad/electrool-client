import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                        <li><NavLink to="/dashboard/myorders">MY ORDERS</NavLink></li>
                        <li><NavLink to="/dashboard/addproducts">ADD PRODUCT</NavLink></li>
                        <li><NavLink to="/dashboard/addreview">ADD REVIEW</NavLink></li>
                        <li><NavLink to="/dashboard/manageorders">MANAGE ORDERS</NavLink></li>
                        <li><NavLink to="/dashboard/manageproducts">MANAGE PRODUCTS</NavLink></li>
                        <li><NavLink to="/dashboard/myprofile">MY PROFILE</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;