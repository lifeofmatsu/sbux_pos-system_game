import React from 'react';
import Button from './Button';

const QtyNumberPad = ({ onNumberSelect }) => {
    return (
        <div className="qty-number-pad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                <Button key={number} text={number.toString()} onClick={() => onNumberSelect(number)} />
            ))}
        </div>
    );
};

export default QtyNumberPad;