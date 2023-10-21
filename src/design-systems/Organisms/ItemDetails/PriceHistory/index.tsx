import Charts from 'design-systems/Molecules/Charts'

const PriceHistory: React.FC = () => {
  return (
    <div className="flex w-full flex-row ">
      <Charts
        chartPotions={{
          top: 20, // Adjust the top padding as needed
          left: 90, // Adjust the left padding as needed
          right: 0, // Adjust the right padding as needed
          bottom: 50, // Adjust the bottom padding as n
        }}
        chartType="LineChart"
        className="left-0 h-[208px]"
        data={[
          ['Date', 'Sales', 'AvgPrice'],
          ['July 28', 0, 3],
          ['July 29', 0, 4.65],
          ['July 30', 0, 4.35],
          ['July 31', 0, 5.75],
          ['Aug 01', 0, 3],
          ['Aug 02', 0, 6.63],
          ['Aug 03', 0, 6.35],
        ]}
        lineColor="#DB417D"
        height="278px"
        // ticks={[7.25, 7.5, 7.75, 8.0]}
        vAxisTitle="Average price (ETH)"
      />
    </div>
  )
}
export default PriceHistory
