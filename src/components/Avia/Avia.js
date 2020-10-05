import React from 'react';
import styles from './Avia.module.scss';
import logo from './Logo.svg';
import Filters from '../Filters/Filters';
import Content from '../Content/Content';

const Avia = (props) => {
  return (
    <div className={`${styles.container} container`}>
      <img src={logo} alt="" />
      <div className={styles.app}>
        <Filters />
        <Content />
      </div>
    </div>
  );
};

export default Avia;
