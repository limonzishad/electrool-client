import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = ({ children }) => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 px-10">
                        <div className="flex-1 px-2 mx-2 text-xl font-bold">ELECTROOL</div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-1">
                                <li><NavLink to='/' className='rounded-md font-medium'>HOME</NavLink></li>
                                {
                                    user ?
                                        <>
                                            <li>
                                                <NavLink to='/dashboard' className='rounded-md font-medium'>DASHBOARD</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/purchase' className='rounded-md font-medium'>PURCHASE</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/blogs' className='rounded-md font-medium'>BLOGS</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/portfolio' className='rounded-md font-medium'>MY PORTFOLIO</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/login" onClick={handleLogout} className='rounded-md font-medium'>LOGOUT</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink to='/blogs' className='rounded-md font-medium'>BLOGS</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/portfolio' className='rounded-md font-medium'>MY PORTFOLIO</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/login' className='rounded-md font-medium'>LOGIN</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/register' className='rounded-md font-medium'>REGISTER</NavLink>
                                            </li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 fixed top-0">
                        <li><NavLink to='/' className='rounded-md font-medium'>HOME</NavLink></li>
                        {
                            user ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard' className='rounded-md font-medium'>DASHBOARD</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/purchase' className='rounded-md font-medium'>PURCHASE</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/blogs' className='rounded-md font-medium'>BLOGS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/portfolio' className='rounded-md font-medium'>MY PORTFOLIO</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" onClick={handleLogout} className='rounded-md font-medium'>LOGOUT</NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/blogs' className='rounded-md font-medium'>BLOGS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/portfolio' className='rounded-md font-medium'>MY PORTFOLIO</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/login' className='rounded-md font-medium'>LOGIN</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/register' className='rounded-md font-medium'>REGISTER</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;