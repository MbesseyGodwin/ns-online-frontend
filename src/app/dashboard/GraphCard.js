import React, { useEffect } from 'react';
import Chart from 'chart.js';

function GraphCard() {
  useEffect(() => {
    const chartData = {
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Page Impressions',
          data: [10, 20, 30, 40],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
          label: 'Adsense Clicks',
          data: [5, 15, 10, 30],
          type: 'line',
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
        },
      ],
    };

    const ctx = document.getElementById('chartjs-7');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
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
  }, []); // Empty dependency array ensures that useEffect runs once after the initial render

  return (
    <div className="">
      <div className="bg-gray-900 border border-gray-800 rounded shadow">
        <div className="border-b border-gray-800 p-3">
          <h5 className="font-bold uppercase text-gray-600">Graph</h5>
        </div>
        <div className="p-5">
          <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined"></canvas>
        </div>
      </div>
    </div>
  );
}

export default GraphCard;
