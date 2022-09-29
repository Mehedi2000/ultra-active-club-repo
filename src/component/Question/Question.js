import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='blog'>
            <h1>Interview Question</h1>
            <hr />
            <div className='Question'>
                <div className='first-Q'>
                    <h2>1.How Does React Work?</h2>
                    <p></p>
                </div>
                <div className='second-Q'>
                    <h2>2.Difference Between State And Props?</h2>
                    <p></p>
                </div>
                <div className='third-Q'>
                    <h2>3.What is worked the use of useEffect without data load?</h2>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Question;