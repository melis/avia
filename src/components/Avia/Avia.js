import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

// import { bindActionCreators } from 'redux';

const Avia = (props) => {
  console.log(props);
  return (
    <div>
      <h2> {props.test}</h2>
      <button onClick={props.inc}>Add1</button>
      <button onClick={props.addTen}>Add10</button>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    test: state.test,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   const { setAllTickets, inc } = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     setAllTickets,
//   };
// };
export default connect(mapToProps, actions)(Avia);
