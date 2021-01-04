import * as React from 'react';
import styles from './index.module.scss';
import SequenceChart from '../../components/SequenceChart';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';
import RecordList from './RecordList';
import RecentlyIndicator from './RecentlyIndicator';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getRecentlyRecord, recordState } from '../../store';

type Home = {};

function Home(props: Home) {
  const [recordList, _] = useRecoilState(recordState);
  const recentlyRecord = useRecoilValue(getRecentlyRecord);

  if (recordList.length === 0) {
    return (
      <div className={styles.container}>
        <Header />
        <div>데이터를 등록해 주세요.</div>
        <Navigator />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <RecentlyIndicator recentlyRecord={recentlyRecord} />
      <SequenceChart data={recordList} />
      <RecordList data={recordList} />
      <Navigator />
    </div>
  );
}

export default Home;
