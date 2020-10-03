export const setAllTickets = (tickets) => {
  return {
    type: 'SET_ALL_TICKETS',
    tickets,
  };
};

export const inc = () => {
  return { type: 'INC' };
};

export const addTen = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'TEN' });
    }, 2000);
  };
};
