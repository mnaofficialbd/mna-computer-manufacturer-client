import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Pages/Shared/Loading';
import MakeAdminPanel from './MakeAdminPanel';


const MakeAdmins = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mna-computer-manufacturer.herokuapp.com/user',{
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-2xl text-center'>All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user,index )=><MakeAdminPanel
                            key={user._id}
                            index={index}
                            user={user}
                            refetch={refetch}
                            ></MakeAdminPanel>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmins;