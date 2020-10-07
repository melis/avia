import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import styles from './Tickets.module.scss';
import Spinner from '../Spinner/Spinner';
import aviaApi from '../../aviaApi/aviaApi';
import { ticketsCreator } from './ticketsCreator';

const Tickets = (props) => {
  const { allTickets, kind, setAllTickets, transfer } = props;
  const { all, none, one, two, three } = transfer;
  const [loading, setLoading] = useState(false);
  const [showCount, setShowCount] = useState(5);
  const [localTickets, setLocalTickets] = useState([]);
  // const [error, setError] = useState(false);
  // getMinutes() getHours()
  const getTickets = () => {
    aviaApi.getTickets().then((a) => {
      console.log(a);
      if (a.tickets) {
        if (a.tickets.length > 0) setAllTickets(a.tickets);
      }
      if (!a.stop) {
        getTickets();
      } else setLoading(true);
    });
  };

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    setLocalTickets(ticketsCreator([...allTickets], kind, showCount, transfer));
  }, [allTickets.length, showCount, kind, all, none, one, two, three]);

  return (
    <div>
      <Spinner loading={loading} />
      <div>{localTickets}</div>
      <div className={styles.showMore}>
        <span onClick={() => setShowCount(showCount + 5)}>Показать еще </span>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    kind: state.kind,
    transfer: state.transfer,
    allTickets: state.allTickets,
  };
};

export default connect(mapToProps, actions)(Tickets);
