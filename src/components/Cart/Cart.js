import React, {useContext} from 'react'
import Modal from '../UI/Modal';
import styling from './Cart.module.css'
import context from '../../store/cart-context'
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(context);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemove = id => {
      cartCtx.removeItem(id);
    };
    const cartItemAdd = item => {
      cartCtx.addItem(item);
    };

    const cartItems = (
    <ul className={styling['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem onRemove = {cartItemRemove.bind(null, item.id)} onAdd = {cartItemAdd.bind(null, item)}  key = {item.id} name = {item.name} amount = {item.amount} price = {item.price} />
      ))}
    </ul>
  );
    return (
        <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styling.actions}>
        <button className={styling['button--alt']} onClick = {props.onClose}>Close</button>
        {hasItems && <button className={styling.button}>Order</button>}
      </div>
    </Modal>
    )
}

export default Cart
