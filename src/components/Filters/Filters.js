import React from 'react';
import { Checkbox } from 'antd';
import styles from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <Checkbox
        onChange={(a) => {
          console.log(a.target.checked);
        }}
      >
        Все
      </Checkbox>
      <Checkbox
        onChange={(a) => {
          console.log(a.target.checked);
        }}
      >
        Без пересадок
      </Checkbox>
      <Checkbox
        onChange={(a) => {
          console.log(a.target.checked);
        }}
      >
        1 пересадка
      </Checkbox>
      <Checkbox
        onChange={(a) => {
          console.log(a.target.checked);
        }}
      >
        2 пересадки
      </Checkbox>
      <Checkbox
        onChange={(a) => {
          console.log(a.target.checked);
        }}
      >
        3 пересадки
      </Checkbox>
    </div>
  );
};
export default Filters;
