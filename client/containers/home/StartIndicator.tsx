import * as React from 'react';
import styles from './StartIndicator.module.scss';

export type StartIndicatorType = {};

function StartIndicator(props: StartIndicatorType) {
  return (
    <div className={styles.container}>
      <div className={styles.start_desc}>혈당 그래프 기록 시작 하기</div>
      <div>
        <div className={styles.arrow} />
        <div className={styles.arrow} />
      </div>
    </div>
  );
}

export default StartIndicator;
