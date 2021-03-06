export const initialState = {
  basket: [],
  allData: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.amount + amount, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "UPDATE_AMOUNT":
      const updateIndex = state.basket.findIndex(
        (item) => item?.id === action.id
      );
      let newArr = [...state.basket];
      newArr[updateIndex] = { ...newArr[updateIndex], amount: action.amount };
      return {
        ...state,
        basket: newArr,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the Basket! `
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ALLDATA":
      return {
        ...state,
        allData: action.allData,
      };
    case "SET_CART":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_ADD":
      return {
        ...state,
        address: action.address,
      };

    default:
      return state;
  }
};

export default reducer;
