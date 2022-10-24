import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-item';
import { useDispatch, useSelector } from 'react-redux';



const CartButton = (props) => {
  const quentity =useSelector(state=>state.cart.totalQuentity)
  // const items =useSelector(state=>state.cart.items)
  // const numberOfCardItem = items.reduce((curNumber ,item)=>{
  //   return curNumber +item.quentity
  // },0)
  const dispatch=useDispatch()
  const toggleui=()=>{
    dispatch(uiAction.toggoleUi())
    
  }
  return (
    <button className={classes.button} onClick={toggleui}>
      <span>My Cart</span>
      <span className={classes.badge}>{quentity}</span>
    </button>
  );
};

export default CartButton;
