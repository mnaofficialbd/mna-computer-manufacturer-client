import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

import { useForm } from 'react-hook-form';
import auth from '../../Firebase/firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile] = useUpdateProfile(auth);

    const onSubmit = async (data) => {
        await updateProfile({ 
            phoneNumber: data.phone,
            education: data.education,
            address: data.address,
            linkedin: data.linkedIn,
        });
    };

    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-green-500 text-2xl'>My Profile</h2>
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
                                <span>Phone</span>
                                <input type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Phone Number'
                                        },
                                        pattern: {
                                            value: /[0-9]{11,14}/,
                                            message: 'Provide the correct Phone Number'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}
                                {errors.phone?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.phone.message}</span>}
                            </label>
                        </div>
                        {/* education field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Education</span>
                                <input type="text" placeholder="Educational Qualification" className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Educational Qualification'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.education?.type === 'required' && <span className="label-text-alt text-red-700">{errors.education.message}</span>}
                            </label>
                        </div>
                        {/* location field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>Address</span>
                                <input type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Address'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-700">{errors.address.message}</span>}
                            </label>
                        </div>
                        {/* linkedIn field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="input-group">
                                <span>LinkedIn</span>
                                <input type="text" placeholder="LinkedIn Account Link" className="input input-bordered w-full max-w-xs"
                                    {...register("linkedIn", {
                                        required: {
                                            value: true,
                                            message: 'Provide your LinkedIn Account Link'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.linkedIn?.type === 'required' && <span className="label-text-alt text-red-700">{errors.linkedIn.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Update Profile' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;