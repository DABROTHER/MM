/* eslint-disable react-hooks/exhaustive-deps */
import { Chart } from 'react-google-charts'
import { useMemo } from 'react'

import { ChartsProps } from './interface'

const Charts: React.FC<ChartsProps> = ({
  data,
  ticks,
  gridLinesColor = 'transparent',
  className,
  chartPotions,
  chartType,
  newData,
  vAxisTitle,
  height,
  width = '100%',
  border = 1,
  hAxisPosition,
}) => {
  const diffdata = {
    old: data,
    new: newData,
  }

  const options = {
    vAxis: {
      title: vAxisTitle,
      ticks: ticks,
      gridlines: {
        color: gridLinesColor,
      },
    },
    hAxis: {
      textPosition: hAxisPosition,
      gridlines: {
        color: gridLinesColor,
      },
    },

    legend: { position: 'none' },
    series: {
      0: { type: 'bars', color: '#DB417D' },
      1: { type: 'line', color: '#000' },
    },
    responsive: true,
    chartArea: {
      color: '#9a9a9a',
      backgroundColor: {
        stroke: '#9a9a9a',
        strokeWidth: border,
      },
      top: chartPotions?.top, // Adjust the top padding as needed
      left: chartPotions?.left, // Adjust the left padding as needed
      right: chartPotions?.right, // Adjust the right padding as needed
      bottom: chartPotions?.bottom,
    },
    bar: { groupWidth: '28%' },
    diff: { newData: { widthFactor: 1 } },
    annotations: {
      // alwaysOutside: false,
      textStyle: {
        fontSize: 22,
        // auraColor: '#000',
        color: '#000',
      },
      boxStyle: {
        stroke: '#9A9A9A',
        strokeWidth: 1,
        gradient: {
          color1: '#fff',
          color2: '#fff',
          x1: '16px',
          y1: '16px',
          x2: '16px',
          y2: '16px',
        },
      },
    },
  }

  const chartData = useMemo(() => (chartType === 'ColumnChart' ? { diffdata } : { data }), [diffdata, data, chartType])

  return (
    <Chart chartType={chartType} className={className} {...chartData} height={height} options={options} width={width} />
  )
}
export default Charts
