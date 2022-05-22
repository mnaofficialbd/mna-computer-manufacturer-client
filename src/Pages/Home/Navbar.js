import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to='/' className='rounded-lg  '>Home</NavLink></li>
        <li><NavLink to='/purchase' className='rounded-lg  '>Purchase</NavLink></li>
        <li><NavLink to='/dashboard' className='rounded-lg  '>Dashboard</NavLink></li>
        <li><NavLink to='/myPortfolio' className='rounded-lg  '>My Portfolio</NavLink></li>
        <li><NavLink to='/blogs' className='rounded-lg  '>Blogs</NavLink></li>
        <li><NavLink to='/register' className='rounded-lg  '>Register</NavLink></li>
        <li><NavLink to='/login' className='rounded-lg  '>Login</NavLink></li>
    </>

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">MNA Computer Manufacturer</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal gap-x-2 p-0">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;