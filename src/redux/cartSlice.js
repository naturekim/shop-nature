import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      // payload와 같은 id를 가진 상품을 찾아서 +1 해달라
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (state[번호].count + action.payload.amount < 1) {
        alert("최소주문수량은 1개입니다.");
      } else {
        state[번호].count += action.payload.amount;
        // (state가 array나 object인경우 return안하고 직접 수정가능)
      }
    },
    addItem(state, action) {
      // 장바구니에 같은 아이디의 상품이 존재하면 count만 추가
      const 찾은상품 = state.find((a) => a.id === action.payload.id);
      찾은상품 == null ? state.push(action.payload) : 찾은상품.count++;
    },
    deleteItem(state, action) {
      let newCart = state.filter((a) => a.id !== action.payload);
      return newCart;
    },
    deleteSelected(state, action) {
      let newCart = state.filter((a) => a.checked === false);
      return newCart;
    },
    handleChkbox(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      state[번호].checked = action.payload.checked;
    },
    handleAllChkbox(state, action) {
      state.forEach((a) => {
        a.checked = action.payload.checked;
      });
    },
  },
});

export let {
  addCount,
  addItem,
  deleteItem,
  deleteSelected,
  handleChkbox,
  handleAllChkbox,
} = cartSlice.actions;

export default cartSlice.reducer;