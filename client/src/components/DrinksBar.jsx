import React from 'react';
import Button from './Button';

const DrinksBar = ({ onSelect }) => {
    const drinks = ['Brewed', 'Espresso', 'Blended', 'Tea', 'Other'];
    return (
        <div className="drinks-bar">
            {drinks.map(drink => (
                <Button key={drink} text={drink} onClick={() => onSelect(drink)} />
            ))}
        </div>
    );
};

export default DrinksBar;