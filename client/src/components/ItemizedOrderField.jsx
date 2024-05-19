import React from 'react';

const ItemizedOrderField = ({ orderItems }) => {
    return (
        <div className="itemized-order-field">
            {orderItems.map((item, index) => (
                <div key={index} className="order-item">
                    {item.name} - ${item.price.toFixed(2)}
                </div>
            ))}
        </div>
    );
};

export default ItemizedOrderField;