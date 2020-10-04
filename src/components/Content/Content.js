import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import styles from './Content.module.scss';
import Tab from '../Tab/Tab';

const Content = () => {
  return (
    <div className={styles.content}>
      <Tab />
    </div>
  );
};
export default Content;
