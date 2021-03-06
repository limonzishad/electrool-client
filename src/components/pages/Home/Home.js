import React from "react";
import { Link } from "react-router-dom";
import Product from "../Products/Product";
import setProduct from "../../../hooks/useProduct";
import setReview from "../../../hooks/useReview";
import Review from "../Review/Review";

const Home = () => {
    const [products] = setProduct();
    const [reviews] = setReview();
    return (
        <div>
            {/* banner */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/banner-electric-construction-tools_80590-3707.jpg" alt="hero section" className="w-52 md:w-72 lg:w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">We Produce the Best Ones.</h1>
                        <p className="py-6">Providing best electric tool is our motto and satisfying customer is our earnings. To full fill customer need we are manufacturing the best tool for electric uses.</p>
                    </div>
                </div>
            </div>

            {/* products */}
            <div className="bg-base-200">
                <h1 className="text-3xl font-semibold text-center">OUR PRODUCTS</h1>
                <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 bg-base-200">
                    {
                        products.slice(0, 3).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>

            {/* summary */}
            <div className="bg-base-200 p-5">
                <h1 className="text-3xl font-semibold text-center">BUSINESS SUMMARY</h1>
                <div className="flex justify-center items-center bg-base-200 pt-5">
                    <div className="stats stats-vertical lg:stats-horizontal shadow-lg">

                        <div className="stat">
                            <div className="stat-title">PRODUCTS</div>
                            <div className="stat-value">100K</div>
                            <div className="stat-desc">Jan 1st - Dec 31st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">1500</div>
                            <div className="stat-desc">?????? 150 (32%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">800</div>
                            <div className="stat-desc">?????? 90 (24%)</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* review */}
            <div className="bg-base-200 pt-10">
                <h1 className="text-3xl font-semibold text-center">CUSTOMER REVIEWS</h1>
                <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 bg-base-200 pb-14">
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>

            {/* visit section */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="w-52 md:w-72 lg:w-full hero-content flex-col lg:flex-row">
                        <img src="http://www.bjbanner.com/uploadfile/2015/0827/20150827101611979.jpg" alt="factory" className="rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">VISIT TO US</h1>
                            <p className="py-6">We are excited to let you know that we organized a industrial visit. Which means you can visit our factory. If you are interested than you can submit a request to us.</p>
                            <button className="btn btn-primary">SUBMIT REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* news teller */}
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="w-52 md:w-72 lg:w-full hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold">SUBSCRIBE NOW</h1>
                            <p className="py-6">Subscribe to our news teller feature to get all the updates. And it is 100% free. So, let's do this.</p>
                        </div>
                        <div className="card flex-shrink-0 w-52 md:w-72 lg:w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
                <div className="text-black font-medium grid grid-flow-col gap-4">
                    <Link to='/' className="link link-hover">HOME</Link>
                    <Link to='/products' className="link link-hover">PRODUCTS</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                    </div>
                </div>
                <div>
                    <p className="text-black font-medium">Copyright ??2022 - All right reserved by Electrool Industries Ltd.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;