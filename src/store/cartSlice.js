import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name :'cart',
    initialState:{
        items:[],
        totalQuentity:0,
        changed :false,
    },
        reducers: {
            replaceCart(state, action) {
              state.totalQuentity = action.payload.totalQuentity;
              state.items = action.payload.items;
            },
        addToCart(state,action){
            const newItem=action.payload
            const existingItems=state.items.find((el)=>el.id===newItem.id)
            state.totalQuentity++
            state.changed=true
            if(!existingItems){
               state.items.push({
                id :newItem.id,
                name:newItem.title,
                quentity:1,
                price:newItem.price,
                totalPrice:newItem.price
               })
            }else{
                existingItems.quentity++
               existingItems.totalPrice=existingItems.totalPrice+newItem.price
            }
        },
        removeItemFromCart(state,action){
            const id =action.payload
            const existingItem= state.items.find((el)=>el.id===id)
            console.log(existingItem)
            state.totalQuentity--
            state.changed=true


            if(existingItem.quentity===1){
                state.items=state.items.filter(el=>el.id!==id)
            }else{
                existingItem.quentity--
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price

            }
        }
    }
})





export const cartAction =cartSlice.actions
export default cartSlice;
