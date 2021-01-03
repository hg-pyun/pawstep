import * as React from 'react';
import styles from './RecordList.module.scss';
import IconSyringe from '../../components/icon/IconSyringe';
import IconFood from '../../components/icon/IconFood';
import { Record, RecordType } from '../../types/types';
import IconWalk from '../../components/icon/IconWalk';
import dayjs from 'dayjs';
import { getTextColorClass } from '../../commons/utility';

type RecordList = {
  data: Array<Record>;
};

function RecordList(props: RecordList) {
  const { data } = props;

  const getIconFromRecordType = (type: RecordType) => {
    switch (type) {
      case RecordType.Medicine:
        return <IconSyringe />;
      case RecordType.Food:
        return <IconFood />;
      case RecordType.Walk:
        return <IconWalk />;
    }
  };

  const getIconTextFromRecordType = (type: RecordType) => {
    switch (type) {
      case RecordType.Medicine:
        return '주사';
      case RecordType.Food:
        return '식사';
      case RecordType.Walk:
        return '산책';
    }
  };

  const renderItems = (list: Array<Record>) => {
    return list.map((item, index) => (
      <li key={index}>
        <div className={styles.date}>{dayjs(item.date).format('DD일 HH:mm')}</div>
        <div className={styles.blood_sugar_level}>
          <strong className={getTextColorClass(item.value)}>{item.value}</strong> mg/dl
        </div>
        <div className={styles.icon}>{getIconFromRecordType(item.type)}</div>
        <div className={styles.icon_name}>{getIconTextFromRecordType(item.type)}</div>
        <div className={styles.value}>{item.text}</div>
      </li>
    ));
  };

  return (
    <div className={styles.record_list}>
      <ul>{renderItems(data)}</ul>
    </div>
  );
}

export default RecordList;
