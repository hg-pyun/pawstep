import * as React from 'react';
import * as Chart from 'chart.js';
import { useEffect, useRef } from 'react';
import { ISequenceChartData } from '../commons/types';

type SequenceChart = {
  data: Array<ISequenceChartData>;
};

function SequenceChart(props: SequenceChart) {
  const { data = [] } = props;
  const ctx = useRef(null);

  useEffect(() => {
    const myChart = new Chart(ctx.current, {
      type: 'line',
      data: {
        datasets: [{
          data: data,
        }]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              time: {
                unit: 'hour',
                displayFormats: {
                  quarter: 'HH'
                }
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={ctx} id="myChart" width="400" height="400" />
    </div>
  );
}

export default SequenceChart;
