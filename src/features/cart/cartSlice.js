import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addtoCart, deleteItemFromCart, fecthItemsByUserId, updateCart } from './cartAPI';

const initialState = {
  status:'idle',
  items: [],
}
// store cart data
export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (item) => {
    const response = await addtoCart(item);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)
// fetch cart data
export const fecthItemsByUserIdAsync = createAsyncThunk(
  'cart/fecthItemsByUserId',
  async (userId) => {
    const response = await fecthItemsByUserId(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)
// update item
export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)
// delete item
export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
)
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload)
      })
      .addCase(fecthItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fecthItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items[index] = action.payload
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id === action.payload.id)
        state.items.splice(index,1)
      })
  },
})

export const { increment } = cartSlice.actions
export const selectedItem = (state) => state.cart.items
export default cartSlice.reducer;
