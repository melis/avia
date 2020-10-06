import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Tickets.module.scss';
import Spinner from '../Spinner/Spinner';
import * as actions from '../../store/actions';
import aviaApi from '../../aviaApi/aviaApi';
import { ticketsCreator } from './ticketsCreator';

const Tickets = (props) => {
  const { allTickets, kind, setAllTickets } = props;
  const [loading, setLoading] = useState(false);
  const [showCount, setShowCount] = useState(5);

  const [localTickets, setLocalTickets] = useState([]);

  const getTickets = () => {
    aviaApi.getTickets().then((a) => {
      if (a.tickets) {
        setAllTickets(a.tickets);
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
    const arr = [...allTickets];
    setLocalTickets(ticketsCreator(arr, kind, showCount));
  }, [allTickets.length, showCount, kind]);

  return (
    <div>
      <Spinner loading={loading} />
      <div>{localTickets}</div>
      <div className={styles.showMore}>
        <span onClick={() => setShowCount(showCount + 5)}>Показать еще</span>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    kind: state.kind,
    filter: state.filter,
    allTickets: state.allTickets,
  };
};

export default connect(mapToProps, actions)(Tickets);
