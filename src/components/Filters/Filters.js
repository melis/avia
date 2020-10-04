import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <Checkbox>Все</Checkbox>
      <Checkbox>Без пересадок</Checkbox>
    </div>
  );
};
export default Filters;
