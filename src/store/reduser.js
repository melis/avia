const initialState = { allTickets: [], filter: 'ALL' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return { allTickets: [...state.allTickets, ...action.tickets] };
    case 'FILTER_CHANGE':
      return { filter: action.filter };
    default:
      return state;
  }
};

export default reducer;
