const initialState = { allTickets: [], filter: 'ALL', kind: 'INEXPENSIVE' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return { ...state, allTickets: [...state.allTickets, ...action.tickets] };
    case 'FILTER_CHANGE':
      return { ...state, filter: action.filter };
    case 'KIND_CHANGE':
      return { ...state, kind: action.kind };
    default:
      return state;
  }
};

export default reducer;
