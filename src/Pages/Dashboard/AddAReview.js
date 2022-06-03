import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { isLoading } = useQuery('reviews', () => { fetch('https://mna-computer-manufacturer.herokuapp.com/reviews').then(res => res.json()) })

    const imgStorageKey = 'b81832e42347a65fbc19c2064f308dd5';

    const onSubmit = async (data, user) => {
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
                    const reviewData = {
                        name: data.name,
                        ratings: data.ratings,
                        review: data.review,
                        img: img
                    }
                    // send data to database
                    fetch('https://mna-computer-manufacturer.herokuapp.com/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(reviewData)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Review added successfully')
                                reset();
                            }
                            else {
                                toast.error('Review added fail. Please try again')
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
                    <h2 className='text-center text-green-500 text-4xl font-semibold'>Add A Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs my-4">
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Your Name" value={user?.displayName} className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Provide the product name'
                                        }
                                    })} />
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs my-4">
                            <label className="input-group">
                                <span>Review</span>
                                <input type="text" placeholder="Your Review description" className="input input-bordered w-full max-w-xs"
                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Review description'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red-700">{errors.review.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs my-4">
                            <label className="input-group">
                                <span>Ratings</span>
                                <input type="number" placeholder="Ratings" className="input input-bordered w-full max-w-xs"
                                    {...register("ratings", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Ratings'
                                        },
                                        pattern: {
                                            value: /[1-5]{1}/,
                                            message: 'Provide the 1 carectar Ratings Number'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-700">{errors.ratings.message}</span>}
                                {errors.ratings?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.ratings.message}</span>}
                            </label>
                        </div>
                        {/* user image */}
                        <div className="form-control w-full mt-4 max-w-xs">
                            <label className="input-group">
                                <span>User's Image</span>
                                <input type="file" className="input justify-center w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "User's profile Image is Required"
                                        }
                                    })} />
                            </label>
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Review Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;