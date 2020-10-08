import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './Spinner.module.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 15 }} spin />;

const Spinner = props => {
  const { loading } = props;
  return <div className={styles.spinner}>{loading ? null : <Spin indicator={antIcon} />}</div>;
};

Spinner.propTypes = {
  loading: PropTypes.bool,
};
export default Spinner;
