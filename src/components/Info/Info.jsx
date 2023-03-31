import React from 'react';

const Info = () => {
    return (
        <div className="card lg:card-side bg-indigo-900 shadow-xl mt-8">
            <figure>
                <img src="https://images.unsplash.com/photo-1652077859695-de2851a95620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                </figure>
            <div className="card-body">
                <h2 className="card-title">Question-answers</h2>
                <h3>What is the difference between props and state?</h3>
                <p>Ans: State has initial value, and updates value of the component.
                    Props usually is used to display the data on webpage, props are read by a parent. </p>
                <h3>How does useState work?</h3>
                <p>Ans: useState is usually update the functinal component and it is a react hook.It has two value the current value and updated value. It can contain a initial value and return updated  the value.  </p>
                <h3>What is the Purpose of useEffect other than fetching data?</h3>
                <p>Ans:Another purpose of useEffect is to contain dependency, useEffect can declare dependency which helps to retrieve updated data without loading the page.</p>
                <h3>How Does React work?</h3>
                <p>Ans: React uses components to organize data and set them in app.jsx. Each components can pass the data through props.</p>
                
                
            </div>
        </div>
    );
};

export default Info;