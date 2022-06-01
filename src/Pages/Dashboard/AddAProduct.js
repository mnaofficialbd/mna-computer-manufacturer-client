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
                    fetch('https://localhost:5000/products',{
                        method:'POST',
                        headers:{
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res=>res.json())
                    .then(inserted=>{
                        if(inserted.insertedId){
                            toast.success('Product added successfully')
                            reset();
                        }
                        else{
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
        <div>
            <h2 className="text-2xl text-center">Add a new Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddAProduct;