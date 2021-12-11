import styling from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styling['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={styling.summary}>
          <span className={styling.price}>{price}</span>
          <span className={styling.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styling.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;