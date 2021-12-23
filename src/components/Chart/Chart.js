import React from 'react';
import ChartBar from './ChartBar';
import ExpenseChart from './ExpenseChart';


const Chart = props => {
    const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaximum = Math.max(...dataPointsValues);

    const Chart = props => {
        return (<>
            <div className='chart'>
                {props.dataPoints.map((dataPoints) => (
                    <ChartBar
                        key={dataPoints.label}
                        value={dataPoints.value}
                        maxValue={totalMaximum}
                        label={dataPoints.label} />
                ))}

                {/* <ExpenseChart /> */}
            </div>
        </>)
    }

};

export default Chart;