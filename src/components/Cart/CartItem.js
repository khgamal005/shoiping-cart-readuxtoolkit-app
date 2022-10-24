import classes from './CartItem.module.css';
import { cartAction } from './../../store/cartSlice';
import { useDispatch } from 'react-redux';



const CartItem = (props) => {
  const { total,title, price ,id,quantity} = props.item

const dispatch =useDispatch()
const addToCartHandeler=()=>{
  dispatch(cartAction.addToCart({
    id,
    price,
  }))
    }

 
  const removeItemFromCartHandeler=()=>{
dispatch(cartAction.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandeler}>-</button>
          <button onClick={addToCartHandeler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
