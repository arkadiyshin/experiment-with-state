import React from 'react';
import MenuItem from './MenuItem';

function MenuList(props) {

    const {foodItems} = props;

    return (
        <div>
            {foodItems.map((item, index) => (
                <MenuItem key={index} {...item} index={index}/>
            ))}
        </div>
    );
}

export default MenuList;
