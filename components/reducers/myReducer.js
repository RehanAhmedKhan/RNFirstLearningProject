const initialState = 0;
const incDecNumber = (state = initialState, action) => {
  if (action.type == 'INCREMENT') {
    return state + action.payload;
  } else if (action.type == 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

export default incDecNumber;
