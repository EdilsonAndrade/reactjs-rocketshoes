export const addToCartRequest = id => {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
};
export const addToCartSucces = product => {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
};

export const removeFromCart = id => {
  return {
    type: '@cart/REMOVE',
    id,
  };
};

export const updateAmountRequest = (id, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
};
export const updateAmountSuccess = (id, amount) => {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
};
