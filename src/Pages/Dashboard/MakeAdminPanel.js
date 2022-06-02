import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import Loading from '../../Pages/Shared/Loading';


const MakeAdminPanel = () => {
    const [user] = useAuthState(auth);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${user?.email}`, {
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
    }

    return (
        <div>
            <h2 className='text-2xl text-center'>All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>User</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user?.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                                    {/* <td><button className="btn btn-xs">Remove User</button></td> */}
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdminPanel;