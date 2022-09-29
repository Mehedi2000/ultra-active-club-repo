import React from 'react';
import './Activite.css'

const Activite = (props) => {
    const { img, name, time } = props.activite;
    return (
        <div className='activite-container'>
            <img src={img} alt="" />
            <div className='activite-info'>
                <h3>{name}</h3>
                <h5 className="time">Time required : {time}m</h5>
            </div>
            <button onClick={() => props.handleAddToList(props.activite)} className='activite-btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Activite;