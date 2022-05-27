import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProducts = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className="text-center text-xl">Total Products: {products.length} </h2>
            <h2 className="text-center text-3xl">Manage Products </h2>
            <div className="overflow-x-auto p-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product / Part</th>
                            <th>About</th>
                            <th>Minimum Order</th>
                            <th>Price (Per Unit)</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.minimum}</td>
                                    <td>{product.price}</td>
                                    <td><button>Delete</button></td>
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