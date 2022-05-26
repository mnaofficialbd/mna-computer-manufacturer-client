import React from 'react';

const OurStock = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className='text-3xl text-center text-orange-500 font-bold'>Our Available Product</h2>
                    <div >
                        <div><p>HTML</p><progress class="progress progress-warning w-56" value="1" max="100"></progress></div> <br />
                        <div><p>HTML</p><progress class="progress progress-warning w-56" value="30" max="100"></progress></div> <br />
                        <div><p>HTML</p><progress class="progress progress-warning w-56" value="50" max="100"></progress></div> <br />
                        <div><p>HTML</p><progress class="progress progress-warning w-56" value="80" max="100"></progress></div> <br />
                        <div><p>HTML</p><progress class="progress progress-warning w-56" value="20" max="100"></progress></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStock;