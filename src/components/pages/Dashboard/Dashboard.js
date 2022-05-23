import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200">
                    <h1>DASHBOARD</h1>
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-3 overflow-y-auto w-48 bg-base-100 text-base-content gap-y-2">
                        <li><NavLink to="/dashboard/addreview">Sidebar Item 1</NavLink></li>
                        <li><NavLink to="/dashboard/addproducts">Sidebar Item 2</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;