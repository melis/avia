const initialState = { test: 0, allTickets: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, test: state.test + 1 };
    case 'TEN':
      return { ...state, test: state.test + 10 };
    case 'SET_ALL_TICKETS':
      return { ...state, allTickets: action.tickets };
    default:
      return state;
  }
};

export default reducer;
