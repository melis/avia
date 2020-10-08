import React from 'react';
import time from './time';
import styles from './Ticket.module.scss';

const Ticket = (props) => {
  const { ticket } = props;

  let transferInfo1 = 'ПЕРЕСАДКИ НЕТ';
  let transferInfo2 = 'ПЕРЕСАДКИ НЕТ';
  if (ticket.segments[0].stops.length === 1) {
    transferInfo1 = '1 ПЕРЕСАДКА';
  } else if (ticket.segments[0].stops.length > 1) {
    transferInfo1 = `${ticket.segments[0].stops.length} ПЕРЕСАДКИ`;
  }

  if (ticket.segments[0].stops.length === 1) {
    transferInfo2 = '1 ПЕРЕСАДКА';
  } else if (ticket.segments[1].stops.length > 1) {
    transferInfo2 = `${ticket.segments[1].stops.length} ПЕРЕСАДКИ`;
  }

  const time1 = time(ticket.segments[0].date, ticket.segments[0].duration);
  const time2 = time(ticket.segments[1].date, ticket.segments[1].duration);

  return (
    <div className={styles.ticket}>
      <div className={styles.heder}>
        <div className={styles.price}>{ticket.price} Р</div>
        <div>{ticket.carrier}</div>
      </div>
      <div className={styles.ticketInfo}>
        <div className={styles.oneWay}>
          <div>
            <div className={styles.titles}>
              {ticket.segments[0].origin} - {ticket.segments[0].destination}
            </div>
            <div className={styles.val}>{time1.join(' - ')}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(ticket.segments[0].duration / 60)}ч {ticket.segments[0].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>{transferInfo1}</div>
            <div className={styles.val}>{ticket.segments[0].stops.join(' ')}</div>
          </div>
        </div>
        <div className={styles.oneWay}>
          <div>
            <div className={styles.titles}>
              {ticket.segments[1].origin} - {ticket.segments[1].destination}
            </div>
            <div className={styles.val}>{time2.join(' - ')}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(ticket.segments[1].duration / 60)}ч {ticket.segments[1].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>{transferInfo2}</div>
            <div className={styles.val}>{ticket.segments[1].stops.join(' ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
