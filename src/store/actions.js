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

export const setTransfer = ({ all, none, one, two, three, i }) => {
  if (i) {
    none = all;
    one = all;
    two = all;
    three = all;
  } else {
    if (none && one && two && three) {
      all = true;
    } else {
      all = false;
    }
  }
  return { type: 'SET_TRANSFER', transfer: { all, none, one, two, three } };
};
