import * as React from 'react';
import styles from './index.module.scss';
import SequenceChart from '../../components/SequenceChart';
import { Record, RecordType } from '../../types/types';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import RecordList from './RecordList';
import RecentlyIndicator from './RecentlyIndicator';

type Home = {};

function Home(props: Home) {
  const dummyData: Array<Record> = [
    { date: new Date('2021-01-01T14:50:32'), value: 300, type: RecordType.Food, text: '메모를 길게 써 봅니다...' },
    {
      date: new Date('2021-01-01T16:30:32'),
      value: 150,
      type: RecordType.Medicine,
      text: '메모 메모 메모 메모 메모 메모 메모 메모 메모 메모 메모 메모',
    },
    { date: new Date('2021-01-01T17:10:32'), value: 170, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-01T20:40:32'), value: 190, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02T01:30:32'), value: 250, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02T03:30:32'), value: 210, type: RecordType.Medicine, text: '메모' },
    { date: new Date('2021-01-02T06:30:32'), value: 300, type: RecordType.Medicine, text: '메모' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <RecentlyIndicator data={dummyData} />
      <SequenceChart data={dummyData} />
      <RecordList data={dummyData} />
      <Navigator />
    </div>
  );
}

export default Home;
