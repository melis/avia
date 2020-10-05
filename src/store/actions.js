export const setAllTickets = (tickets) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TICKETS',
      tickets,
    });
  };
};

export const setFilter = (filter) => {
  return { type: 'FILTER_CHANGE', filter };
};
