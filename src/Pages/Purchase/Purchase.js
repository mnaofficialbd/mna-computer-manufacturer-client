import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/firebase.init';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        console.log(data.email, data.password, data.name);
    };
    console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-blue-600 font-bold">Purchase</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* name Field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label class="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Provide your name'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Email Field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label class="input-group">
                                <span>Email</span>
                                <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Provide your email'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* number Field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label class="input-group">
                                <span>Phone</span>
                                <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Phone Number'
                                        },
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,20}$/,
                                            message: 'Provide the 6 characters longer and Strong password'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Address Field */}
                        <div className="form-control w-full max-w-xs my-3">
                            <label class="input-group">
                                <span>Address</span>
                                <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Provide your Address'
                                        }
                                    })} />
                            </label>
                            <label>
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;