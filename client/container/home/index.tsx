import * as React from 'react';
import styles from './index.module.scss';
import SequenceChart from '../../components/SequenceChart';
import { ISequenceChartData } from '../../types/types';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import CommonButton from '../../components/CommonButton';
import IconFood from '../../components/icon/IconFood';
import IconSyringe from '../../components/icon/IconSyringe';

type Home = {};

const dummyData: Array<ISequenceChartData> = [
  {
    x: new Date(2020 - 12 - 27),
    y: 150,
  },
  {
    x: new Date(2020 - 12 - 28),
    y: 200,
  },
];

function Home(props: Home) {
  return (
    <div className={styles.container}>
      <Header />
      <SequenceChart data={dummyData} />
      <div className={styles.record_list}>
        <ul>
          <li>
            <div className={styles.date}>7:45</div>
            <div className={styles.blood_sugar_level}>
              <strong className={styles.emphasis}>160</strong> mg/dl
            </div>
            <div className={styles.icon}>
              <IconSyringe />
            </div>
            <div className={styles.icon_name}>주사</div>
            <div className={styles.value}>란투스 4.5</div>
          </li>
          <li>
            <div className={styles.date}>7:45</div>
            <div className={styles.blood_sugar_level}>
              <strong className={styles.emphasis}>160</strong> mg/dl
            </div>
            <div className={styles.icon}>
              <IconFood />
            </div>
            <div className={styles.icon_name}>식사</div>
            <div className={styles.value}>Wd 89g</div>
          </li>
          <li>
            <div className={styles.date}>7:45</div>
            <div className={styles.blood_sugar_level}>
              <strong className={styles.emphasis}>200</strong> mg/dl
            </div>
            <div className={styles.icon}>
              <IconSyringe />
            </div>
            <div className={styles.icon_name}>주사</div>
            <div className={styles.value}>란투스 4.5</div>
          </li>
          <li>
            <div className={styles.date}>7:45</div>
            <div className={styles.blood_sugar_level}>
              <strong className={styles.emphasis}>43</strong> mg/dl
            </div>
            <div className={styles.icon}>
              <IconSyringe />
            </div>
            <div className={styles.icon_name}>주사</div>
            <div className={styles.value}>란투스 4.5</div>
          </li>
        </ul>
      </div>
      <div className={styles.bottom_area}>
        <div className={styles.record}>
          <CommonButton>+ 기록하기</CommonButton>
        </div>
      </div>
      <Navigator />
    </div>
  );
}

export default Home;
