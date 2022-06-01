import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    // const [deletingProduct, setDeletingProduct] = useState(null);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;

            fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
    }

    const { isLoading } = useQuery('products', () => fetch('http://localhost:5000/products', {
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
            <h2 className="text-center text-xl">Total Products: {products.length} </h2>
            <div className="overflow-x-auto p-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Avatar</th>
                            <th>Product / Part</th>
                            <th>About</th>
                            <th>Minimum Order</th>
                            <th>Price (Per Unit)</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <>
                                <tr>
                                <th>{index + 1}</th>
                                    <td className='avatar'>
                                        <div class="w-16 rounded-xl">
                                            <img src={product.img} alt="" />
                                        </div>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.minimum}</td>
                                    <td>{product.price}</td>
                                    <td><button
                                        onClick={() => handleDelete(product._id)}
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

export default ManageProducts;