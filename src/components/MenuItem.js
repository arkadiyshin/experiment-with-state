import React, { useContext} from 'react';
import MenuContext from '../context/MenuContext';


function MenuItem(props) {

    const { index } = props;
    const { isFavoriteArray, setIsFavoriteArray } = useContext(MenuContext);
    let isFavorite = isFavoriteArray[index];

    function handleClickFavorite() {
        setIsFavoriteArray(isFavoriteArray.map( (e, i) => (i === index) ? !isFavorite : e ));
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

                <div id="favorite" className={isFavorite ? 'isFavorite' : 'notFavorite'}
                    onClick={handleClickFavorite}
                />
            </div>
        </div>
    );
}

export default MenuItem;
