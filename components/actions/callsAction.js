export const callDelete = abc => {
  return {
    type: 'CALLDELETE',
    payload: abc,
  };
};

export const callEdit = () => {
  return {
    type: 'CALLEDIT',
  };
};

export const displaycallsList = () => {
  return {
    type: 'DISPLAYCALLLIST',
  };
};
