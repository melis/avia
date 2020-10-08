import React from 'react';
import { Checkbox } from 'antd';
import styles from './Filters.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { bindActionCreators } from 'redux';

const Filters = (props) => {
  const { transfer, setTransfer } = props;
  const { all, none, one, two, three } = transfer;

  return (
    <div className={styles.filters}>
      <div className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={styles.cheks}>
        <Checkbox
          checked={all}
          onChange={(val) => {
            setTransfer({ all: val.target.checked, none, one, two, three, i: true });
          }}
        >
          Все
        </Checkbox>
        <Checkbox
          checked={none}
          onChange={(val) => {
            setTransfer({ all, none: val.target.checked, one, two, three });
          }}
        >
          Без пересадок
        </Checkbox>
        <Checkbox
          checked={one}
          onChange={(val) => {
            setTransfer({ all, none, one: val.target.checked, two, three });
          }}
        >
          1 пересадка
        </Checkbox>
        <Checkbox
          checked={two}
          onChange={(val) => {
            setTransfer({ all, none, one, two: val.target.checked, three });
          }}
        >
          2 пересадки
        </Checkbox>
        <Checkbox
          checked={three}
          onChange={(val) => {
            setTransfer({ all, none, one, two, three: val.target.checked });
          }}
        >
          3 пересадки
        </Checkbox>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transfer: state.transfer,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { setTransfer } = bindActionCreators(actions, dispatch);
  return {
    setTransfer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
