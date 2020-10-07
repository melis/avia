const transfer = {
  all: false,
  none: false,
  one: false,
  two: false,
  three: false,
};

const initialState = { allTickets: [], transfer, kind: 'INEXPENSIVE' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return { ...state, allTickets: [...state.allTickets, ...action.tickets] };
    case 'FILTER_CHANGE':
      return { ...state, filter: action.filter };
    case 'KIND_CHANGE':
      return { ...state, kind: action.kind };
    case 'SET_TRANSFER':
      return { ...state, transfer: action.transfer };
    default:
      return state;
  }
};

export default reducer;
