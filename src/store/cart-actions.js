import { uiAction } from './ui-item';
import { cartAction } from './cartSlice';



export const fetchDataCart=()=>{
    return async(dispatch)=>{
      const fetchData =async()=>{
        const res =await fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/cart.json')

        if(!res.ok){
            throw new Error('Could not fetch cart data!')
        }
        const data = await res.json();
        return data;
      
      }
      try {
     const cartData=  await fetchData();
        dispatch(cartAction.replaceCart({
            items:cartData.items||[],
           totalQuentity:cartData.totalQuentity


        }))
   
        
      } catch (error) {
        dispatch(uiAction.showNotification({
            status :'error',
            title :'error...',
            message :'sending cart data faild'
           })) 
      
        
      }
    }
}


export const sendCardData=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiAction.showNotification({
            status :'pending',
            title :'sending...',
            message :'sending cart data'
           }))

           const sendRequest=async()=>{
            const res =await fetch('https://addorder-8a4e6-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT' ,
                body:JSON.stringify({items:cart.items ,totalQuentity:cart.totalQuentity})
               })
               if(!res.ok){
                throw new Error('sending data faild')
                   }
           }
          try{
            await sendRequest()
            dispatch(uiAction.showNotification({
                status :'success',
                title :'success...',
                message :'sending cart data successfuly'
               }))     
            

          }catch(error){
            dispatch(uiAction.showNotification({
                status :'error',
                title :'error...',
                message :'sending cart data faild'
               })) 
          
          }
    }
}