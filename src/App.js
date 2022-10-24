import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import { sendCardData, fetchDataCart } from './store/cart-actions';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';


let isInitial = true;

function App() {
  const dispatch =useDispatch()
  // const [isInitial, setIsInitial] = useState(true);

  const ui =useSelector(state=>state.ui.showUi)
  const notification =useSelector(state=>state.ui.notification)
  const cart =useSelector(state=>state.cart)



  // const sendData= async()=>{
  //   dispatch(uiAction.showNotification({
  //     status :'pending',
  //     title :'sending...',
  //     message :'sending cart data'
  //    }))
 
  //   const res =await fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/cart.json',{
  //     method:'PUT' ,
  //     body:JSON.stringify(cart)
  //    })
  //    if(!res.ok){
  //     throw new Error('sending data faild')
  //        }

  //    dispatch(uiAction.showNotification({
  //     status :'success',
  //     title :'success...',
  //     message :'sending cart data successfuly'
  //    }))     

  // }
    useEffect(()=>{
      dispatch(fetchDataCart())
    },[dispatch])

  useEffect(()=>{
    if (isInitial) {
      isInitial=false;
      return;
  }
  if(cart.changed){
    dispatch(sendCardData(cart))

  }
  // sendData().catch(error=>{
  //   dispatch(uiAction.showNotification({
  //     status :'error',
  //     title :'error...',
  //     message :'sending cart data faild'
  //    })) 


  // })
},[cart,dispatch ])

  return (
    <Fragment>
     { notification  && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
      {ui && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
