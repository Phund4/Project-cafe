/* eslint-disable react/prop-types */
import './pizza.sass';

function Pizza({ text, price }) {
    return (
        <li className={`main-pizzapage-gallery__item`}>
            <p className="main-pizzapage-gallery__text">{text}</p>
            <p className="main-pizzapage-gallery__price">{price}</p>
        </li>
    )
}

export default Pizza;