export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart],
      };
  }
};
