import React from "react";

const Portfolio = () => {
    return (
        <div>
            <div className="card w-52 md:w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">ZISHAD HOSSAIN LIMON</h2>
                    <hr />
                    <p className="text-sm md:text-base">Address: Dhaka, Bangladesh</p>
                    <p className="text-sm md:text-base">Email: zishadlimon@gmail.com</p>
                    <hr />
                    <h4 className="font-medium">EDUCATION</h4>
                    <p className="text-sm md:text-base">BSc. in Computer Science & Engineering</p>
                    <p className="text-sm md:text-base">American Internation University-Bangladesh</p>
                    <hr />
                    <h4 className="font-medium">SKILLS</h4>
                    <p className="text-sm md:text-base text-justify">HTML5, CSS3, Javascript, React, React Hooks, Firebase, React Firebase Hooks, Express JS, Node JS, MongoDB etc.</p>
                    <hr />
                    <h4 className="font-medium">PROJECTS</h4>
                    <div>
                        <p className="font-medium"> Handset Store</p>
                        <p className="text-sm md:text-base text-justify">User can Register and Login to the website using Email address and Google. There are some protected pages which require user Login to visit those pages. User will receive a verification email after successful registration. Besides, user can reset their password.</p>
                        <p className="font-medium">Live Website: https://handset-store.web.app/</p>
                    </div>
                    <div>
                        <p className="font-medium"> Online Tutor</p>
                        <p className="text-sm md:text-base text-justify">User can Register and Login to the website using Email address and Google. User will receive a verification email after successful registration. Besides, user can reset their password.</p>
                        <p className="font-medium">Live Website: https://online-tutor-dba75.web.app/</p>
                    </div>
                    <div>
                        <p className="font-medium"> Laptop Ghor</p>
                        <p className="text-sm md:text-base text-justify">This is a simple static ui based react application. The dashboard shows dynamic charts.</p>
                        <p className="font-medium">Live Website: https://product-analysis-website-limonzishad.netlify.app/</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;