import React from 'react';
import Button from './Button';

const UserFunctionsNav = ({ functions }) => {
    return (
        <div className="user-functions-nav">
            {functions.map(func => (
                <Button key={func} text={func} onClick={() => console.log(`${func} clicked`)} />
            ))}
        </div>
    );
};

export default UserFunctionsNav;