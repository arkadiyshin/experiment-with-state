import React from 'react';
import MenuItem from './MenuItem';

function MenuList(props) {

    const {foodItems, onClick, states} = props;

    return (
        <div>
            {foodItems.map((item, index) => (
                <MenuItem key={index} {...item} index={index} onClick={onClick} isFavoriteState={states[index]}/>
            ))}
        </div>
    );
}

export default MenuList;
