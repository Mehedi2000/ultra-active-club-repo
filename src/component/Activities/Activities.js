import React from 'react';
import './Activities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Activite from '../Activite/Activite';



const Activities = () => {

    const [activities, setActivities] = useState([])
    const [cart, setcart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activite) => {
        const newCart = [...cart, activite]
        setcart(newCart)
    }
    let total = 0;
    for (const activite of cart) {
        total = total + parseInt(activite.time);
    }


    return (
        <div className='activities-container'>
            <div className='activities-section'>
                <div>
                    <div className='header'>
                        <FontAwesomeIcon className='header-icon' icon={faPersonWalking} />
                        <span>Daily Routine</span>
                    </div>
                    <p className='sub'>Select today's Activities</p>
                </div>
                <div className='all-activities'>
                    {
                        activities.map(activite => <Activite
                            activite={activite}
                            key={activite.id}
                            handleAddToList={handleAddToList}
                        ></Activite>)
                    }
                </div>
            </div>
            <div className='cart-section'>
                <div className='about-me'>
                    <h2>Mehedi Hasan</h2>
                    <h5>Junior Web Developer</h5>
                    <h5>Age: 24</h5>
                </div>
                <div className='break-section'>
                    <h2>Add A Break</h2>
                    <div className='break-time'>
                        <span>10m</span>
                        <span>20m</span>
                        <span>30m</span>
                        <span>40m</span>
                    </div>
                </div>
                <div className='activities-details'>
                    <h2>Activities Details</h2>
                    <div className='activities-time'>
                        <span>Activities time</span>
                        <span>{total}m</span>
                    </div>
                    <div className='Break-time'>
                        <span>Break time</span>
                        <span>0m</span>
                    </div>
                </div>
                <button className='cart-btn'><p>Activity Completed</p></button>
            </div>
        </div>
    );
};

export default Activities;