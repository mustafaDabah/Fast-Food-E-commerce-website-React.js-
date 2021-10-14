import { createSlice } from '@reduxjs/toolkit'

// cart state 
const initialState = {
  shopCartDetails:{
    id:'',
    title:'',
    price:'',
    image:'',
    quantity:0
  },
  shopCartProducts:[]
}

export const ShopCartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct:(state , action) => {
      // add details 
      if (state.shopCartProducts.length === 0 ) {
        state.shopCartDetails.id = action.payload.id;
        state.shopCartDetails.title = action.payload.title;
        state.shopCartDetails.price = action.payload.price;
        state.shopCartDetails.quantity = action.payload.quantity;
        state.shopCartDetails.image = action.payload.image;
        // set details to shopCartProducts
        state.shopCartProducts = [state.shopCartDetails, ...state.shopCartProducts]
      }else {
        let check = false ;
        state.shopCartProducts.forEach((item , key) =>{
          if (item.id === action.payload.id) {
            state.shopCartProducts[key].quantity++;
            check = true ;
          } 
        })

        if (!check) {
          state.shopCartDetails.id = action.payload.id;
          state.shopCartDetails.title = action.payload.title;
          state.shopCartDetails.price = action.payload.price;
          state.shopCartDetails.quantity = action.payload.quantity;
          state.shopCartDetails.image = action.payload.image;
          // set details to shopCartProducts
          state.shopCartProducts = [state.shopCartDetails, ...state.shopCartProducts]
        }
      }
    },
    increaseQuantity:(state , action) => {
      state.shopCartProducts.forEach((item , key) =>{
        if (item.id === action.payload.id) {
          state.shopCartProducts[key].quantity++;
        } 
      })
    },
    decreaseQuantity:(state , action) => {
      state.shopCartProducts.forEach((item , key) =>{
        if (item.id === action.payload.id) {
          const quantity =  state.shopCartProducts[key].quantity;
          if(quantity > 1 ) {
            state.shopCartProducts[key].quantity--;
          }
        } 
      })
    },
    removeProduct:(state , action) => {
      state.shopCartProducts = state.shopCartProducts.filter(item => item.id !== action.payload);
    },
    cleanShoppingCart:(state) => {
      state.shopCartProducts = []
    },

  },
})

// Action creators are generated for each case reducer function
export const { addProduct , removeProduct , increaseQuantity , decreaseQuantity , cleanShoppingCart} = ShopCartSlice.actions

export default ShopCartSlice.reducer