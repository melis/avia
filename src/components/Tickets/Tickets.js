import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import aviaApi from '../../aviaApi/aviaApi';
import { ticketsCreator } from './ticketsCreator';
// import { bindActionCreators } from 'redux';

const Tickets = (props) => {
  const [showCount, setShowCount] = useState(5);
  const { allTickets } = props;

  function recurs() {
    aviaApi.getTickets().then((a) => {
      if (a.tickets) {
        props.setAllTickets(a.tickets);
      }
      if (!a.stop) {
        recurs();
      }
    });
  }

  useEffect(() => {
    recurs();
  }, []);

  const arr = [...allTickets];
  arr.length = showCount;
  const tickets = ticketsCreator(arr);

  return (
    <div>
      <div>{tickets}</div>
      <div>
        <span onClick={() => setShowCount(showCount + 5)}>Показать еще</span>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    filter: state.filter,
    allTickets: state.allTickets,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   const { setAllTickets, inc } = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     setAllTickets,
//   };
// };
export default connect(mapToProps, actions)(Tickets);
