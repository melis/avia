import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import aviaApi from '../../aviaApi/aviaApi';
import styles from './Avia.module.scss';
import logo from './Logo.svg';
import Filters from '../Filters/Filters';
import Content from '../Content/Content';

// import { bindActionCreators } from 'redux';

const Avia = (props) => {
  console.log(props.arr);
  // const { arr, setArr } = useState([]);
  useEffect(() => {
    console.log('useEff');
    // setArr(props.arr);
  }, [props.arr]);
  return (
    <div className={styles.container}>
      <img src={logo} alt="" />
      <div className={styles.app}>
        <Filters />
        <Content />
      </div>
      <h2>{props.test}</h2>
      <button onClick={props.inc}>Add1</button>
      <button onClick={props.addTen}>Add10</button>
      <button
        onClick={() => {
          aviaApi.getTickets().then((a) => props.setAllTickets(a));
        }}
      >
        setarr
      </button>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    test: state.test,
    arr: state.allTickets,
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
