import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from './../../store/cartSlice';


const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch= useDispatch()



  const addToCartHandeler=()=>{
    dispatch(cartAction.addToCart({
      id,
      title,
      price,
      description,
    }))

  }

///////////////////////////////////////////////
// const addToCartHandler = () => {
//   const newTotalQuantity = cart.totalQuantity + 1;

//   const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
//   const existingItem = updatedItems.find((item) => item.id === id);
//   if (existingItem) {
//     const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
//     updatedItem.quantity++;
//     updatedItem.totalPrice = updatedItem.totalPrice + price;
//     const existingItemIndex = updatedItems.findIndex(
//       (item) => item.id === id
//     );
//     updatedItems[existingItemIndex] = updatedItem;
//   } else {
//     updatedItems.push({
//       id: id,
//       price: price,
//       quantity: 1,
//       totalPrice: price,
//       name: title,
//     });
//   }

//   const newCart = {
//     totalQuantity: newTotalQuantity,
//     items: updatedItems,
//   };

//   dispatch(cartAction.replaceCart(newCart));

//   // and then send Http request
//   fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/cart.json', { method: 'POST', body: JSON.stringify(newCart) })

//   dispatch(
//     cartAction.addToCartHandeler({
//       id,
//       title,
//       price,
//     })
//   );
// };


//////////////////////////


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandeler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
