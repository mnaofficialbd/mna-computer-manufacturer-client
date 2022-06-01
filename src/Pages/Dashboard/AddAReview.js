import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import auth from '../../Firebase/firebase.init';

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // await updateProfile();
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-green-500 text-4xl font-semibold'>Add A Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" value={user?.displayName} readOnly disabled className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Email</span>
                                <input type="email" value={user?.email} name='email' className="input input-bordered w-full max-w-xs" required readOnly disabled />
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs my-3">
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
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Phone</span>
                                <input type="number" placeholder="Ratings" className="input input-bordered w-full max-w-xs"
                                    {...register("ratings", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Ratings'
                                        },
                                        pattern: {
                                            value: /[0-5]{1}/,
                                            message: 'Provide the 1 carectar Ratings Number'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-700">{errors.ratings.message}</span>}
                                {errors.ratings?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.ratings.message}</span>}
                            </label>
                        </div>
                        {/* education field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Education</span>
                                <input type="file" placeholder="Educational Qualification" className="input input-bordered w-full max-w-xs"
                                    {...register("img")} />
                            </label>
                            
                        </div>
                        
                        
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;