// import React from 'react';

const Faq = () => {
    return (
        <div className="bg-blue-100 py-4 md:mt-0 mt-4">
            <h2 className="font-bold md:text-3xl text-2xl text-center ">Frequently Asked Questions</h2>
            <div className="md:px-20 px-2 md:mt-4 mt-2">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-lg font-medium">
                        1. Props vs state ?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional.</p>
                        <p>React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.</p>
                    </div>
                </div>
            </div>
            <div className="md:px-20 px-2 md:mt-4 mt-2">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-lg font-medium">
                        2.How does useState work?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: useState gives an array consists of two values: a variable and a set function which update the state variable. The initial value of useState can be empty array, 0, null or any initial value.</p>
                    </div>
                </div>
            </div>
            <div className="md:px-20 px-2 md:mt-4 mt-2">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-lg font-medium">
                        3.Purpose of useEffect other than fetching data?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: Purpose of useEffect other than fetching data are the following </p>
                        <ol>
                            <li>1.Input field validation</li>
                            <li>2.Side Effect Runs After Props and State Value Change</li>
                            <li>3.Side Effect Runs Only Once After Initial Render</li>
                            <li>4.Live filtering on state change.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="md:px-20 px-2 md:mt-4 mt-2">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-lg font-medium">
                        4.How Does React work?
                    </div>
                    <div className="collapse-content">
                        <p>Answer: React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;