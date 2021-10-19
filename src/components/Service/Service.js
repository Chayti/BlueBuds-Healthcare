import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div className="service py-4">
            <img className="m-3" src={img} alt="" />
            <h3 className="px-3">{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/service/${id}`}>
                <button className="btn mx-3">Book for {name.toLowerCase()}</button>
            </Link>
        </div>
    );
}

export default Service;