export const messageDelete = abc => {
  return {
    type: 'MESSAGEDELETE',
    payload: abc,
  };
};

export const messageEdit = (value, text) => {
  return {
    type: 'MESSAGEEDIT',
    editVal: value,
    updatedName: text,
  };
};

export const displaymessageList = () => {
  return {
    type: 'DISPLAYMESSAGELIST',
  };
};
