export const IncNumber = num => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const DecNUmber = () => {
  return {
    type: 'DECREMENT',
  };
};
