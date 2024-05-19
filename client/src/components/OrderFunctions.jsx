import React from 'react';
import Button from './Button';

const OrderFunctions = ({ onFunctionSelect }) => {
    return (
        <div className="order-functions">
            <Button text="Void Item" onClick={() => onFunctionSelect('void')} />
            <Button text="Find Order" onClick={() => onFunctionSelect('find')} />
            <Button text="Discount" onClick={() => onFunctionSelect('discount')} />
        </div>
    );
};

export default OrderFunctions;