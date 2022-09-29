import React from 'react';
import './Activities.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import Activite from '../Activite/Activite';


const Activities = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

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
                </div>
            </div>
        </div>
    );
};

export default Activities;