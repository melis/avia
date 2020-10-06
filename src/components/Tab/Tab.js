import React from 'react';
import { Radio } from 'antd';
import styles from './Tab.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { bindActionCreators } from 'redux';

const Tab = (props) => {
  const { kind, setKind } = props;

  return (
    <Radio.Group
      className={styles.tab}
      value={kind}
      onChange={(a) => {
        setKind(a.target.value);
      }}
      style={{ marginBottom: 16 }}
    >
      <Radio.Button value="INEXPENSIVE">САМЫЙ ДЕШЕВЫЙ</Radio.Button>
      <Radio.Button value="FASTEST">САМЫЙ БЫСТРЫЙ</Radio.Button>
    </Radio.Group>
  );
};
const mapToProps = (state) => {
  return {
    kind: state.kind,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setKind } = bindActionCreators(actions, dispatch);
  return {
    setKind,
  };
};
export default connect(mapToProps, mapDispatchToProps)(Tab);
