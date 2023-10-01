import React from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = () => {
  const gaugeChartData = {
    value: 1, // The value for the gauge chart (between 0 and 1)
    textColor: '#FFF', // Color of the text inside the gauge
    id: 'gauge-chart', // ID of the gauge chart container
  };

  return (
    <div>
      <GaugeChart {...gaugeChartData} />
    </div>
  );
};

export default GaugeChartComponent;
