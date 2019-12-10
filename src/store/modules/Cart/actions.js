export const addToCartRequest = id => {
  console.tron.log('entrou');
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

export const updateAmount = (id, ammount) => {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    ammount,
  };
};
