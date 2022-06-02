import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin]=useAdmin(user);
    return (
        <div className="drawer drawer-end drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-center text-blue-500 my-2 py-2'>Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-47 bg-base-100 text-base-content">
                    {user && <>
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReview'>Add A Review</Link></li>
                    </>}

                    {admin && <>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                    <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                    <li><Link to='/dashboard/makeAdminPanel'>Make Admin</Link></li>
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;