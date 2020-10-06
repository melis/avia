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

export const setKind = (kind) => {
  return { type: 'KIND_CHANGE', kind };
};
