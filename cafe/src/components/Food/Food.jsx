/* eslint-disable react/prop-types */
import './food.sass';

function Food({ text, price }) {
    return (
        <li className={`food__item`}>
            <p className="food__text">{text}</p>
            <p className="food__price">{price}</p>
        </li>
    )
}

export default Food;