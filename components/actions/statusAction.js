export const statusDelete = abc => {
  return {
    type: 'STATUSDELETE',
    payload: abc,
  };
};

export const statusEdit = () => {
  return {
    type: 'STATUSEDIT',
  };
};

export const displaystatusList = () => {
  return {
    type: 'DISPLAYSTATUSSLIST',
  };
};
