import { createSlice } from '@reduxjs/toolkit'

// user state 
const initialState = {
 user:[]
}


export const userDetailsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails:(state , action) => {
        state.user = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {setUserDetails} = userDetailsSlice.actions

export default userDetailsSlice.reducer