import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from 'react-query';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete this product')
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
                        <tr className='text-center'>
                            <th className='text-base'>S. No</th>
                            <th className='text-base'>Avatar</th>
                            <th className='text-base'>Product / Part</th>
                            <th className='text-base'>Description</th>
                            <th className='text-base'>Min Order</th>
                            <th className='text-base'>Price <span className='text-sm'>/per</span> </th>
                            <th className='text-base'>Delete</th>
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
                                    <td className='text-base'>{product.description}</td>
                                    <td className='text-center'>{product.minimum}</td>
                                    <td className='text-center'>{product.price}</td>
                                    <td className='text-center'><button
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