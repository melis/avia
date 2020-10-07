import { Spin } from 'antd';
import React from 'react';
import styles from './Spinner.module.scss';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 15 }} spin />;

const Spinner = (props) => {
  const { loading } = props;
  return <div className={styles.spinner}>{loading ? null : <Spin indicator={antIcon} />}</div>;
};

export default Spinner;
