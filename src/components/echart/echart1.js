import React, { useState } from 'react';
import ECharts from 'echarts-for-react';
import './echart1.css'

export default function Echart1() {
    const [options] = useState({
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    });

    return (
        <div className='echart1'>
            <h3>Echart Example1</h3>
            <ECharts
                option={options}
            // opts={{ renderer: 'svg', width: 'auto', height: '100%' }}
            />
        </div>
    )
}