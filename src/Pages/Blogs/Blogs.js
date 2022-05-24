import React from 'react';

const Blogs = () => {
    return (
        <section className='my-8'>
            <div className='mb-5'>
                <h2 className='text-3xl text-center text-blue-700'>Blogs: (Question Answer)</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        1. How will you improve the performance of a React Application?
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        2. What are the different ways to manage a state in a React application?
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        3. How does prototypical inheritance work?
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='card-title'>
                        6. What is a unit test? Why should write unit tests?
                        </p>
                        <div className=' items-center'>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Blogs;