import React from 'react';
import styles from './Content.module.scss';
import Tab from '../Tab/Tab';
import Tickets from '../Tickets/Tickets';

const Content = () => {
  return (
    <div className={styles.content}>
      <Tab />
      <Tickets />
    </div>
  );
};
export default Content;
