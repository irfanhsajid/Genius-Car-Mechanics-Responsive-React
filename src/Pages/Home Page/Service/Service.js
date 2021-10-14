import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    // const {service}= props;
    const { id, name, price, img, description } = service;
    return (
        <div className="service-card">
            <img className="p-2 rounded-3" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price : {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn-dark text-primary fs-6 px-3 py-1 rounded-2 mb-3 border-0">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;