import React from 'react';
import PropTypes from 'prop-types';
import time from './time';
import styles from './Ticket.module.scss';

const Ticket = (props) => {
  const { ticket } = props;
  const { segments } = ticket;
  let transferInfo1 = 'ПЕРЕСАДКИ НЕТ';
  let transferInfo2 = 'ПЕРЕСАДКИ НЕТ';
  if (segments[0].stops.length === 1) {
    transferInfo1 = '1 ПЕРЕСАДКА';
  } else if (segments[0].stops.length > 1) {
    transferInfo1 = `${segments[0].stops.length} ПЕРЕСАДКИ`;
  }

  if (segments[0].stops.length === 1) {
    transferInfo2 = '1 ПЕРЕСАДКА';
  } else if (segments[1].stops.length > 1) {
    transferInfo2 = `${segments[1].stops.length} ПЕРЕСАДКИ`;
  }

  const time1 = time(segments[0].date, segments[0].duration);
  const time2 = time(segments[1].date, segments[1].duration);

  return (
    <div className={styles.ticket}>
      <div className={styles.heder}>
        <div className={styles.price}>{ticket.price} Р</div>
        <div className={styles.logo}>
          <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" />
        </div>
      </div>
      <div className={styles.ticketInfo}>
        <div className={styles.oneWay}>
          <div>
            <div className={styles.titles}>
              {segments[0].origin} - {segments[0].destination}
            </div>
            <div className={styles.val}>{time1.join(' - ')}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(segments[0].duration / 60)}ч {segments[0].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>{transferInfo1}</div>
            <div className={styles.val}>{segments[0].stops.join(' ')}</div>
          </div>
        </div>
        <div className={styles.oneWay}>
          <div>
            <div className={styles.titles}>
              {segments[1].origin} - {segments[1].destination}
            </div>
            <div className={styles.val}>{time2.join(' - ')}</div>
          </div>
          <div>
            <div className={styles.titles}>В ПУТИ </div>
            <div className={styles.val}>
              {Math.trunc(segments[1].duration / 60)}ч {segments[1].duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles.titles}>{transferInfo2}</div>
            <div className={styles.val}>{segments[1].stops.join(' ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object,
  segments: PropTypes.array,
};

export default Ticket;
