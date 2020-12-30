import * as React from 'react';
import SequenceChart from '../../components/SequenceChart';
import { ISequenceChartData } from '../../commons/types';

type Home = {
};

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

function Home(props: Home) {
  return <div>
    <SequenceChart data={dummyData} />
  </div>
}

export default Home;
