import React, { Fragment, useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import styling from './CartButton.module.css'
import context from '../../store/cart-context'
const CartButton = (props) => {
    const [btnHigh, setBtnHigh] = useState(false);
    const cartCtx = useContext(context);
    const num = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    const btnStyle = `${styling.button} ${btnHigh ? styling.bump : ''}`;
    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnHigh(true);
        const timer = setTimeout(() => {
            setBtnHigh(false)
        }, 300);
        return () => {
            clearInterval(timer);
        }
    }, [cartCtx.items]);
    return (
        <Fragment>
            <button className={btnStyle} onClick={props.onClick}>
            <span className={styling.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styling.badge}>
                {num}
            </span>
            </button>
        </Fragment>
    )
}

export default CartButton
