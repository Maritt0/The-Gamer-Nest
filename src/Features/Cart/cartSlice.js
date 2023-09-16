import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: {
      user: "Hardcoder user",
      updatedAt: "",
      total: null,
      items: [],
      orders: [], 
    },
  },
  reducers: {
    saveOrder: (state, action) => {
  
      const { items, total, user, updatedAt } = action.payload;

     
      const newOrder = {
        items,
        total,
        user,
        updatedAt,
      };
      
      state.value.orders.push(newOrder);
    
      state.value.items = [];
    },
    addCartItem: (state, action) => {
  
      const { id, quantity } = action.payload;
      const itemIndex = state.value.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.value.items[itemIndex].quantity += quantity;
      } else {
        state.value.items.push(action.payload);
      }

      state.value.total = state.value.items.reduce(
        (acc, currentItem) =>
          acc + currentItem.price * currentItem.quantity,
        0
      );

      state.value.updatedAt = new Date().toLocaleString();
    },
    removeCartItem: (state, action) => {
      
      const { id, quantity } = action.payload;
      const itemIndex = state.value.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        if (state.value.items[itemIndex].quantity > quantity) {
          state.value.items[itemIndex].quantity -= quantity;
        } else {
          state.value.items.splice(itemIndex, 1);
        }

        state.value.total = state.value.items.reduce(
          (acc, currentItem) =>
            acc + currentItem.price * currentItem.quantity,
          0
        );

        state.value.updatedAt = new Date().toLocaleString();
      }
    },
  },
});

export const { addCartItem, removeCartItem, saveOrder } = cartSlice.actions;

export default cartSlice.reducer;
