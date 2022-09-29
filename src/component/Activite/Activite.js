import React from 'react';
import './Activite.css'

const Activite = (props) => {
    const { id, img, name, time } = props.activite;
    return (
        <div className='activite-container'>
            <img src={img} alt="" />
            <div className='activite-info'>
                <h3>{name}</h3>
                <h5>Time required : {time}m</h5>
            </div>
            <button className='activite-btn'><p>Add to list</p></button>
        </div>
    );
};

export default Activite;