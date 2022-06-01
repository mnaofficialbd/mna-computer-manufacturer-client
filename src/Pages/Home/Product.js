import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = () => {
    const [products] = useProducts();

    return (
        <div className='m-2 p-3'>
            <h2 className='text-center text-4xl mt-3 text-orange-600 font-bold'>Manufacturer Parts / Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.slice(0, 6).map(product => <div key={product._id} className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="text-3xl text-center font-bold text-secondary">{product.name}</h2>
                            <p className=''><span className='font-bold text-2xl'>$ {product.price} </span> per unit price</p>
                            <p className=''><span className='font-semibold'>Details:</span> {product.description}</p>
                            <p className=''><span className='font-semibold'>Available Product:</span> {product.available} pice</p>
                            <p className=''><span className='font-semibold'>Minimum Order:</span> {product.minimum} pice</p>

                            <div className="card-actions justify-center">
                                <button
                                    className="btn btn-outline border-blue-700  w-full max-w-xs my-2">
                                    <Link to='/purchase'>
                                        Purchase
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;