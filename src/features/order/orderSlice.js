import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchCount } from './orderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (amount) => {
    const response = await createOrder(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    resetOrder: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload)
        state.currentOrder = action.payload
      })
  }, 
});

export const { resetOrder } = OrderSlice.actions;

export const selectCurrentOrder = (state) => state.order.currentOrder;

export default OrderSlice.reducer;
