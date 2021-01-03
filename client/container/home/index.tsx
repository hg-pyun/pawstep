import * as React from 'react';
import styles from './index.module.scss';
import SequenceChart from '../../components/SequenceChart';
import { Record, RecordType, SequenceChartData } from '../../types/types';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import CommonButton from '../../components/CommonButton';
import RecordInput from './RecordInput';
import RecordList from './RecordList';
import RecentlyIndicator from './RecentlyIndicator';

type Home = {};

function Home(props: Home) {
  const dummyData: Array<Record> = [
    { date: new Date('2021-01-01 14:50:32'), value: 300, type: RecordType.Food, text: '메모를 길게 써 봅니다...' },
    {
      date: new Date('2021-01-01 16:30:32'),
      value: 150,
      type: RecordType.Medicine,
      text: '메모 메모 메모 메모 메모 메모 메모 메모 메모 메모 메모 메모',
    },
    { date: new Date('2021-01-01 17:10:32'), value: 170, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-01 20:40:32'), value: 190, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02 01:30:32'), value: 250, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02 03:30:32'), value: 210, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02 06:30:32'), value: 300, type: RecordType.Medicine, text: '메모' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <RecentlyIndicator data={dummyData} />
      <SequenceChart data={dummyData} />
      <RecordList data={dummyData} />
      <RecordInput />
      <Navigator />
    </div>
  );
}

export default Home;
