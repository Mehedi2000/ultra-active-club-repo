import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='blog'>
            <h1 className='blog-title'>Interview Question</h1>
            <hr />
            <div className='Question'>
                <div className='first-Q'>
                    <h2>1.How Does React Work?</h2>
                    <h5>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike.
                        The main concept of React. js is virtual DOM.React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together,
                        Reconciliation = Render + Diffing occurs in between + Commit.</h5>
                </div>
                <div className='second-Q'>
                    <h2>2.Difference Between State And Props?</h2>
                    <h5>
                        The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.


                        Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</h5>
                </div>
                <div className='third-Q'>
                    <h2>3.What is worked the use of useEffect without data load?</h2>
                    <h5>This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.

                        The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. <br />
                        Now, let's take a look at some use cases without load data.

                        useEffect use cases <br />
                        1.Running on state change: validating input field <br />
                        2.Running on state change: live filtering <br />
                        3.Running on state change: trigger animation on new array value <br />
                        4.Running on props change: update paragraph list on fetched API data update <br />
                        5.Running on props change: updating fetched API data to get BTC updated price</h5>
                </div>
            </div>
        </div>
    );
};

export default Question;