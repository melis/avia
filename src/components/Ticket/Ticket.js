import React from 'react';

import styles from './Ticket.module.scss';

const Ticket = (props) => {
  const { ticket } = props;

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
            <div className={styles.val}>{ticket.segments[0].date}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(ticket.segments[0].duration / 60)}ч {ticket.segments[0].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>ПЕРЕСАДКИ</div>
            <div className={styles.val}>{ticket.segments[0].stops.join(' ')}</div>
          </div>
        </div>
        <div className={styles.oneWay}>
          <div>
            <div className={styles.titles}>
              {ticket.segments[1].origin} - {ticket.segments[1].destination}
            </div>
            <div className={styles.val}>{ticket.segments[1].date}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(ticket.segments[1].duration / 60)}ч {ticket.segments[1].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>ПЕРЕСАДКИ</div>
            <div className={styles.val}>{ticket.segments[1].stops.join(' ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
