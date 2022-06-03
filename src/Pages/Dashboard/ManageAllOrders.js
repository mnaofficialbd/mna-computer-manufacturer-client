import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import useOrders from '../../hooks/useOrders';
import Loading from '../Shared/Loading';

const ManageAllOrders = () => {
    const [orders, setOrders] = useOrders();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete this order')
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                })
        }
    }

    const { isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-center text-green-500 text-4xl font-semibold">Manage Products </h2>
            <h2 className="text-center text-xl">Total Products: {orders?.length} </h2>
            <div className="overflow-x-auto p-4">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th className='text-base'>S. No</th>
                            <th className='text-base'>Avatar</th>
                            <th className='text-base'>Product / Part</th>
                            <th className='text-base'>Price <span className='text-sm'>/per</span> </th>
                            <th className='text-base'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <>
                                <tr>
                                <th>{index + 1}</th>
                                    <td className='avatar'>
                                        <div class="w-16 rounded-xl">
                                            <img src={order.img} alt="" />
                                        </div>
                                    </td>
                                    <td>{order.name}</td>
                                    <td className='text-center'>{order.price}</td>
                                    <td className='text-center'><button
                                        onClick={() => handleDelete(order._id)}
                                        className='btn bg-red-500 border-0 h-5'>
                                        <FontAwesomeIcon className='' icon={faTrashAlt}></FontAwesomeIcon>
                                    </button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageAllOrders;