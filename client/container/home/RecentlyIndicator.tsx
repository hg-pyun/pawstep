import * as React from 'react';
import styles from './RecentlyIndicator.module.scss';
import { Record, RecordType } from '../../types/types';
import dayjs from 'dayjs';
import { getTextColorClass } from '../../commons/utility';

type RecentlyIndicator = {
  data: Array<Record>;
};

function RecentlyIndicator(props: RecentlyIndicator) {
  const { data = [] } = props;

  const getRecentlyData = (list: Array<Record>) => {
    return list.filter((item) => item.type === RecordType.Medicine).sort((a, b) => +b.date - +a.date)[0];
  };

  const recentlyData = getRecentlyData(data);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>{dayjs(recentlyData.date).format('MMM DD YYYY')}</div>
        <div className={styles.second_row}>
          <strong>{dayjs(recentlyData.date).format('hh:mm A')}</strong>
        </div>
      </div>
      <div className={styles.item}>
        <div>Last Check</div>
        <div className={styles.second_row}>
          <strong className={getTextColorClass(recentlyData.value)}>{recentlyData.value}</strong>
        </div>
      </div>
    </div>
  );
}

export default RecentlyIndicator;
