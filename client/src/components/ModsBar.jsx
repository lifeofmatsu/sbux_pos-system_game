import React from 'react';
import Button from './Button';

const ModsBar = ({ mods, onSelectMod }) => {
    return (
        <div className="mods-bar">
            {mods.map(mod => (
                <Button key={mod} text={mod} onClick={() => onSelectMod(mod)} />
            ))}
        </div>
    );
};

export default ModsBar;