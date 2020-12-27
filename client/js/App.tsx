import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import SequenceChart from './SequenceChart';
import { ISequenceChartData } from '../common/types';

type App = {};

function App(props: App) {
  const dummyData: Array<ISequenceChartData> = [
    {
      x: new Date(2020-12-27),
      y: 150,
    },
    {
      x: new Date(2020-12-28),
      y: 200,
    },
  ];
  return (
    <div>
      <SequenceChart data={dummyData} />
    </div>
  );
}

export default hot(App);
