import * as React from 'react';
import Chart from 'chart.js';
import { useEffect, useRef } from 'react';
import { Record, SequenceChartData } from '../types/types';

type SequenceChart = {
  data: Array<Record>;
};

function SequenceChart(props: SequenceChart) {
  const { data = [] } = props;
  const ctx = useRef(null);

  const mapToChartData = (recordData: Array<Record>) => {
    return recordData.map((item) => {
      return {
        x: item.date,
        y: item.value,
      };
    });
  };

  useEffect(() => {
    const myChart = new Chart(ctx.current, {
      type: 'line',
      data: {
        datasets: [
          {
            data: mapToChartData(data),
          },
        ],
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
                  quarter: 'HH',
                },
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
