import React, {Fragment, useContext} from 'react'
import styling from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import context from '../../../store/cart-context'

const MealItem = (props) => {
    const cartCtx = useContext(context);
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return (
        <Fragment>
            <li className={styling.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styling.description}>{props.description}</div>
                    <div className={styling.price}>{price}</div>
                </div>
                <div>
                    <MealItemForm onAddCart = {addToCartHandler} />
                </div>
            </li>
        </Fragment>
    )
}

export default MealItem
