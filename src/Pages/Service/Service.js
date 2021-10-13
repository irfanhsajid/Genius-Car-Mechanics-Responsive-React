import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    // const {service}= props;
    const { name, price, img, description } = service;
    return (
        <div className="service-card">
            <img className="p-2 rounded-3" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price : {price}</h5>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;