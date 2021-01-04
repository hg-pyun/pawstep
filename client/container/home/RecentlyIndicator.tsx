import * as React from 'react';
import styles from './RecentlyIndicator.module.scss';
import { Record, RecordOptionType } from '../../types/types';
import dayjs from 'dayjs';
import { getTextColorClass } from '../../commons/utility';

type RecentlyIndicator = {
  recentlyRecord: Record;
};

function RecentlyIndicator(props: RecentlyIndicator) {
  const { recentlyRecord } = props;

  if (recentlyRecord === undefined) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>{dayjs(recentlyRecord.date).format('MMM DD YYYY')}</div>
        <div className={styles.second_row}>
          <strong>{dayjs(recentlyRecord.date).format('hh:mm A')}</strong>
        </div>
      </div>
      <div className={styles.item}>
        <div>Last Check</div>
        <div className={styles.second_row}>
          <strong className={getTextColorClass(recentlyRecord.value)}>{recentlyRecord.value}</strong>
        </div>
      </div>
    </div>
  );
}

export default RecentlyIndicator;
