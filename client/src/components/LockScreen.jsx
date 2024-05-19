import React, { useState } from 'react';
import Button from './Button';
import PinEntryPad from './PinEntryPad';

const LockScreen = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [showPinPad, setShowPinPad] = useState(false);

    const handleNumberClick = (number) => {
        setEmployeeId(prev => prev + number);
    };

    const handleSubmit = () => {
        setShowPinPad(true);
    };

    return (
        <div className="lock-screen">
            <input type="text" value={employeeId} readOnly />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                <Button key={number} text={number.toString()} onClick={() => handleNumberClick(number)} />
            ))}
            <Button text="Enter" onClick={handleSubmit} />
            {showPinPad && <PinEntryPad />}
        </div>
    );
};

export default LockScreen;