import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';

const Product = () => {
    const [products] = useProducts();
    const [order, setOrder] = useState(null);

    return (
        <div className='m-2 p-3'>
            <h2 className='text-center text-3xl mt-3 text-orange-600 font-bold'>Manufacturer Parts / Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products?.slice(0,6).map(product => <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-xl font-bold text-secondary">{product.name}</h2>
                            <p className=''>Price: $ {product.price} per unit</p>
                            <p className=''>About: {product.description}</p>
                            <p className=''>Minimum Orders: {product.minimum}</p>

                            <div className="card-actions justify-center">
                                <label
                                    htmlFor="booking-modal"
                                    onClick={() => setOrder(product)}
                                    className="btn btn-sm btn-black text-white uppercase bg-gradient-to-r from-blue-500 to-sky-700">
                                    Purchase
                                </label>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Product;