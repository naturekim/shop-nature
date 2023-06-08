import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      state.pop(action.payload);
    },
  },
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});

export let { addCount, addItem, deleteItem } = cart.actions;
