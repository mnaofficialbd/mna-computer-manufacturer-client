import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navLinks = <>
        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to='/purchase' className='rounded-lg'>Purchase</NavLink></li>
        <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>
        <li><NavLink to='/myPortfolio' className='rounded-lg'>My Portfolio</NavLink></li>
        <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li>
        <li><NavLink to='/register' className='rounded-lg'>Register</NavLink></li>
        <li><NavLink to='/login' className='rounded-lg'>Login</NavLink></li>
    </>

    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <div className="w-full px-10 navbar fixed top-0 z-50 bg-gray-100">
                    <div className="flex-1 px-2 mx-2 text-2xl">MNA Computer Manufacturer</div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                { children }
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                </ul>
            </div>
            {navLinks}
        </div>
    );
};

export default Navbar;