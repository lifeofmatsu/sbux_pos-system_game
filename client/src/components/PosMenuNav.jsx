import React from 'react';
import Button from './Button';

const PosMenuNav = ({ onSelectMenu }) => {
    const menus = ['Order', 'Tender', 'Functions', 'Drink Builder', 'Food', 'RTDE', 'Beans', 'Misc'];
    return (
        <div className="pos-menu-nav">
            {menus.map(menu => (
                <Button key={menu} text={menu} onClick={() => onSelectMenu(menu)} />
            ))}
        </div>
    );
};

export default PosMenuNav;