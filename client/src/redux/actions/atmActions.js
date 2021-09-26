export const inputNumber = (number) => ({
  type: 'ADD_NUMBER',
  payload: number,
});

export const removeNumber = () => ({
  type: 'REMOVE_NUMBER',
});

export const clearInput = () => ({
  type: 'CLEAR_NUMBERS',
});

export const withdraw = () => ({
  type: 'WITHDRAW',
});

export const setMode = (mode) => ({
  type: 'SET_MODE',
  payload: mode,
});
