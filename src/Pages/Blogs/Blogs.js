import React from 'react';

const Blogs = () => {
    return (
        <section className='my-8'>
            <div className='mb-5'>
                <h2 className='text-3xl text-center text-blue-700 font-semibold'>Blogs: (Question Answer)</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-8 text-xl'>
                
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                            <p className='font-bold'>
                                 What are the different ways to manage a state in a React application?
                            </p>
                        </div>
                        <div>
                            <p>
                                The React State management is an essential component of React functions. There are some types of state we need to properly manage in our React apps:  <br />

                                Local state is important to change the local state only using the setState function as only then will React trigger a component re-render, which is essential for updating the application state.<br />

                                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />

                                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />

                                URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                            <p className='font-bold'>
                                 How does prototypical inheritance work?
                            </p>
                        </div>
                        <div className=''>
                            <p>
                                Prototypical inheritance is the key to understanding how objects inherit properties in JavaScript. Prototypical inheritance is that classical inheritance is limited to classes inheriting from other classes while prototypical inheritance supports the cloning of any object using an object linking mechanism.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                        <p className='font-bold'>
                             Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.
                        </p>
                        </div>
                        <div className='  '>
                            <p>
                                We should never change or update the state directly in React. Because it won't re-render the component. If you immediately call setState. Optimized components might not re-render if you do, and the rendering bugs will be tricky to track down.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                        <p className='font-bold'>
                             You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </p>
                        </div>
                        <div className='  '>
                            <p>
                                We probably have use a for loop to iterate through all the items in the array. If we use find() method ,we can find the name element from products array. The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='font-bold'>
                             What is a unit test? Why should write unit tests?
                        </p>
                        <div className='  '>
                            <p>
                                unit testing is a software testing method by which individual units of source code sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use. Unit tests are typically automated tests written and run by software developers to ensure that a section of an application meets its design and behaves as intended.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blogs;