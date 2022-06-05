import React from 'react';
import Card from './Card';
import data from '../data.js';

const Main = () => {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
                 />
        );
    })

    return (
        <section className="content--container">
            {cards}
        </section>
    )
    
};

export default Main;