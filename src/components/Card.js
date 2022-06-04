import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl}/>
            <span className="card--location"><p>📍 {props.item.location}</p><a className="card--google" href="https://www.google.com">View on Google Maps</a></span>
            <h2 className="card--location-title">Toyko</h2>
            <h4>Start date - End date</h4>
            <p className="card--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis,
                nulla at laoreet consectetur, leo enim efficitur est, ut porttitor arcu elit ac tellus. 
                Suspendisse potenti. Morbi nec posuere nunc.
            </p>

        </div>
    );
};

export default Card;