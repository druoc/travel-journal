import React from 'react';
import Card from './Card';
import data from '../data.js';

console.log(data)

const Main = () => {
    const cards = data.map(item => {
        return (
            <section className="content--container">
            <Card 
                key={item.id}
                item={item}
                 />
            </section>
        );
    })
    
};

export default Main;