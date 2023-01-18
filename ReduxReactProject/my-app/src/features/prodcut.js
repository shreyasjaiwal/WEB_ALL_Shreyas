import {createSlice} from '@reduxjs/toolkit'
export const productSlice=createSlice({
    name:'product',
    initialState:{value:''},
    reducers:{
        addTocart:(state,action)=>{
            state.value=action.payload;
        },
        products:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const {addTocart,products}=productSlice.actions;
export default productSlice.reducer;