import * as React from 'react';
import styles from './Nodata.module.scss';
import ImgNodata from '@/assets/img/nodata.png';

export type NodataType = {};

function Nodata(props: NodataType) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src={ImgNodata} />
        <div className={styles.desc}>
          <span>아직 기록이 없습니다</span>
        </div>
      </div>
    </div>
  );
}

export default Nodata;
