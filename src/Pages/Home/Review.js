import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useReviews from '../../hooks/useReviews'

const Review = () => {
    const [reviews] = useReviews()
    return (
        <section className='my-8'>
            <div className='mb-5'>
                <h2 className='text-4xl text-center text-orange-500 font-bold'>Reviews</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-8'>
                {
                    reviews?.slice(0, 6).map(review => <div key={review._id} className="card lg:max-w-lg bg-base-100 shadow-xl">

                        <div className="avatar m-5 ">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.img} alt="" />
                            </div>
                        </div>
                        <div className='mx-3 pb-3'>
                            <h2 className="text-xl mx-2 font-semibold text-violet-500">{review.name}</h2>

                            <p> <span className='mx-2'>Ratings:</span>
                                <small className='text-yellow-500'>
                                    <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                                    <FontAwesomeIcon className='icon' icon={faStarHalfStroke}></FontAwesomeIcon>
                                </small>
                                <span className='mx-2 text-blue-500'>{review.ratings} stars</span>
                            </p>

                            <p className='mx-2'>{review.review}</p>
                        </div>

                    </div>)
                }

            </div>
        </section>
    );
};

export default Review;