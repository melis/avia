import React, { useState } from 'react';
import { Radio } from 'antd';
import styles from './Tab.module.scss';

const Tab = () => {
  const [val, setVal] = useState('free');

  return (
    <Radio.Group
      className={styles.tab}
      value={val}
      onChange={(a) => {
        setVal(a.target.value);
      }}
      style={{ marginBottom: 16 }}
    >
      <Radio.Button value="free">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
      <Radio.Button value="fast">САМЫЙ БЫСТРЫЙ</Radio.Button>
    </Radio.Group>
  );
};
export default Tab;
