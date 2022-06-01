import React from 'react';
// import { toast } from 'react-toastify';

const MakeAdminPanel = ({ user, index, refetch }) => {
    // const { email, role } = user;
    /* const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===403){
                    toast.error('Failed to make an Admin')
                }
               return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`Successfully made an Admin`)
                }
            })
    } */

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.email}</td>
            {/* <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td> */}
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default MakeAdminPanel;