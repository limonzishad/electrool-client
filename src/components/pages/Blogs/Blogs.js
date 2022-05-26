import React from "react";

const Blogs = () => {
    return (
        <div>
            <div tabIndex="0" className="w-40 md:w-72 lg:w-96 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">How will you improve the performance of a React Application?</div>
                <div className="collapse-content">
                    <p className="text-justify">There are many ways available to optimize a react web application. For instance, we should keep components state local where necessary. Besides, we can memoizing react components to prevent unnecessary re-renders. Also, we can split code in react using dynamic import().</p>
                </div>
            </div>

            <div tabIndex="0" className="w-40 md:w-72 lg:w-96 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">What are the different ways to manage a state in a React application?</div>
                <div className="collapse-content">
                    <p className="text-justify">Communication State, Data State, Control State, Session State and Location State are the different types of manage state in react application.</p>
                </div>
            </div>

            <div tabIndex="0" className="w-40 md:w-72 lg:w-96 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">How does prototypical inheritance work?</div>
                <div className="collapse-content">
                    <p className="text-justify">Every object that has methods and properties contains an internal and hidden property called Prototype. The Prototypal Inheritance is a feature in javascript. It is used to add methods and properties in an objects. It can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object.</p>
                </div>
            </div>

            <div tabIndex="0" className="w-40 md:w-72 lg:w-96 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">What is a unit test? Why should write unit tests?</div>
                <div className="collapse-content">
                    <p className="text-justify">Unit testing is a software development process in which the smallest testable parts of an application are individually studied. The smallest testable parts of an application are called units. This testing methodology is done during the development process by the software developers. Unit test saves both money and time. It makes easy the debugging process. Also, It reduce the reuse of code.</p>
                </div>
            </div>

            <div tabIndex="0" className="w-40 md:w-72 lg:w-96 mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">Why you do not set the state directly in React?</div>
                <div className="collapse-content">
                    <p className="text-justify">It is a convention not to set the state directly even it works in many ways. When you directly set the state, it does not change 'this.state' immediately. Instead of that, it creates a pending state transition, and accessing it after calling this method will only return the present value. Besides, you will lose control of the state over the components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;