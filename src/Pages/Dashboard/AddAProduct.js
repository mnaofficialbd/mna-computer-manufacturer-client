import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Pages/Shared/Loading';


const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading } = useQuery('products', () => { fetch('http://localhost:5000/products').then(res => res.json()) })

    const imgStorageKey = 'b81832e42347a65fbc19c2064f308dd5';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        minimum: data.minimum,
                        available: data.available,
                        price: data.price,
                        img: img
                    }
                    // send data to database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Product added fail. Please try again')
                            }
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading />
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-orange-500 text-4xl'>Add A Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* product name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Provide the product name'
                                        }
                                    })} />
                            </label>
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* description */}
                        <div className="form-control w-full max-w-xs">
                            <label className="input-group">
                                <span>Description</span>
                                <input type="text" placeholder="Product Description" className="input input-bordered w-full max-w-xs"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Provide Product Description'
                                        }
                                    })} />
                            </label>
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                            </label>
                        </div>
                        {/* available */}
                        <div className="form-control w-full mb-4 max-w-xs">
                            <label className="input-group">
                                <span>Available</span>
                                <input type="number" placeholder="Available Product" className="input input-bordered w-full max-w-xs"
                                    {...register("available", {
                                        required: {
                                            value: true,
                                            message: 'Provide Available Product number'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-700">{errors.available.message}</span>}
                            </label>
                        </div>
                        {/* minimum */}
                        <div className="form-control w-full my-4 max-w-xs">
                            <label className="input-group">
                                <span>Minimum</span>
                                <input type="number" placeholder="Minimum Product Order" className="input input-bordered w-full max-w-xs"
                                    {...register("minimum", {
                                        required: {
                                            value: true,
                                            message: 'Provide the Minimum Product order number'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-700">{errors.minimum.message}</span>}
                            </label>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-4 max-w-xs">
                            <label className="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="Per Unit Product Price" className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Provide the Per Unit Product Price'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-700">{errors.price.message}</span>}
                            </label>
                        </div>

                        {/* image */}
                        <div className="form-control w-full mt-4 max-w-xs">
                            <label className="input-group">
                                <span>Image</span>
                                <input type="file" className="input justify-center w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Product Image is Required'
                                        }
                                    })} />
                            </label>
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <input className='btn w-full max-w-xs text-white' type="submit" value='Add Product' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;