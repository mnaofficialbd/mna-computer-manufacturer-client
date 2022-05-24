import React from 'react';
import customersP from '../../assets/BusinessSummary/customers.png';
import revenueP from '../../assets/BusinessSummary/revenue.png';
import partsP from '../../assets/BusinessSummary/parts.png';
import reviewsP from '../../assets/BusinessSummary/reviews.png';

const BusinessSummary = () => {
    return (
        <section className='my-8'>
            <div className='mb-5'>
                <h2 className='text-3xl text-center text-orange-500 font-bold'>Business Summary</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-8'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                    <img className='rounded' src={customersP} alt='' />
                        <div className='text-center'>
                            <div><h3 className='text-3xl text-blue-600 font-bold'>10K +</h3></div>
                            <div><h2 className='text-2xl font-semibold my-2 text-pink-600'>Served Customers</h2></div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                    <img className='rounded' src={revenueP} alt='' />
                        <div className='text-center'>
                            <div><h3 className='text-3xl text-blue-600 font-bold'>150M +</h3></div>
                            <div><h2 className='text-2xl font-semibold my-2 text-pink-600'>Annual Revenue</h2></div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img className='rounded' src={partsP} alt='' />
                        <div className='text-center'>
                            <div><h3 className='text-3xl text-blue-600 font-bold'>50K +</h3></div>
                            <div><h2 className='text-2xl font-semibold my-2 text-pink-600'>Parts/Tools</h2></div>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img className='rounded bg-white' src={reviewsP} alt='' />
                        <div className='text-center'>
                            <div><h3 className='text-3xl text-blue-600 font-bold'>80K +</h3></div>
                            <div><h2 className='text-2xl font-semibold my-2 text-pink-600'>Reviews</h2></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BusinessSummary;