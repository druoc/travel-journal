import React from 'react';

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl}/>
            <span className="card--location"><p>📌 {props.item.location}</p><a className="card--google" href={props.item.googleMapsUrl}>View on Google Maps</a></span>
            <h2 className="card--location-title">{props.item.title}</h2>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p className="card--description">{props.item.description}</p>

        </div>
    );
};

export default Card;