import React from 'react';

function MenuItem(props) {

    const {index, isFavoriteState, onClick} = props;

    function handleClickFavorite() {
        onClick(index, !isFavoriteState);
    }

    return (
        <div className="itemContainer">
            <div className="leftContainer">
                <div className="imgContainer">
                    <img src={props.foodImage} alt="" />
                </div>
                <div className="itemDescription">
                    <h3>{props.itemName}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="rightContainer">
                <div>{props.price} EUR</div>

                <div id="favorite" className={isFavoriteState ? 'isFavorite' : 'notFavorite'}
                    onClick={handleClickFavorite}
                />
            </div>
        </div>
    );
}

export default MenuItem;
