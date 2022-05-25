import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    const navLinks = <>
        <li><NavLink to='/' className='rounded-lg  '>Home</NavLink></li>
        <li><NavLink to='/dashboard' className='rounded-lg  '>Dashboard</NavLink></li>
        <li><NavLink to='/myPortfolio' className='rounded-lg  '>My Portfolio</NavLink></li>
        <li><NavLink to='/blogs' className='rounded-lg  '>Blogs</NavLink></li>
        <li>
        {
            user ? <button className='btn btn-NavLink btn-outline  text-decoration-none fs-5' onClick={handleSignOut}>Sign out</button> : (<NavLink to='/login' className='rounded-lg  '>Login</NavLink>)
        }
        </li>
    </>

    return (
        <div className="navbar bg-yellow-600 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-circle swap swap-rotate mx-2 lg:hidden">
                        <input type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="font-bold text-2xl">MNA Computer Manufacturer</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-x-2 p-0">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;