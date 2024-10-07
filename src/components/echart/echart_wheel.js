import React, { useState, useEffect } from 'react';
import ECharts from 'echarts-for-react';
import './echart_wheel.css'
import { color } from 'echarts';

export default function EchartWheel() {
    const [chartData, setChartData] = useState([]);
    const [stationNames, setStationNames] = useState({}); // 호선별 역 이름 저장
    const [options, setOptions] = useState({}); // 차트 옵션을 저장할 상태

    useEffect(() => {
        const fetchData = async () => {
            try {
                const serviceKey = 'CFX%2FJfkezoSyKEFWonYDzkLnMEmmFdzxwSqRS57HaBvdfz6O18E8fu1O9oCQn5h2pDEHQ8kEvFNdbLHqTiXrFg%3D%3D';
                const url = `https://api.odcloud.kr/api/15044262/v1/uddi:a5adef93-441b-4f2e-9edf-c58f9712801c?serviceKey=${serviceKey}&perPage=120`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }

                const data = await response.json();

                // 호선별로 역 개수 및 역 이름 집계
                const lineCounts = {};
                const lineStations = {};

                data.data.forEach(item => {
                    const lineNumber = parseInt(item.호선.replace("호선", ""));
                    const stationName = item.역명;

                    // 호선별 역 개수
                    lineCounts[lineNumber] = (lineCounts[lineNumber] || 0) + 1;

                    // 호선별 역 이름 저장
                    if (!lineStations[lineNumber]) {
                        lineStations[lineNumber] = [];
                    }
                    lineStations[lineNumber].push(stationName);
                });

                // 데이터 변환하여 차트에 사용할 형식으로 변경
                const transformedData = Object.keys(lineCounts).map(line => ({
                    x: `${line}호선`, // 호선 이름
                    y: lineCounts[line] // 해당 호선의 역 개수
                }));

                setChartData(transformedData);
                setStationNames(lineStations); // 호선별 역 이름 저장

                const colors = ['#0D347F', '#3B9F37', '#DD5C32', '#3165A8', '#703E8C', '#904D23', '#5B692E', '#C82363', '#B39627'];

                // 옵션 설정을 여기서 실행
                setOptions({
                    xAxis: {
                        type: 'category',
                        data: transformedData.map(item => item.x) // x축에 호선명
                    },
                    yAxis: {
                        type: 'value'
                    },
                    tooltip: {
                        trigger: 'axis',
                        formatter: (params) => {
                            const lineName = params[0].name.replace("호선", ""); // '1호선' -> '1'
                            const stations = lineStations[lineName] || [];
                            return `${lineName}호선<br/>역 개수: ${params[0].value}<br/>역 목록: ${stations.join(", ")}`;
                        }
                    },
                    series: [
                        {
                            data: transformedData.map((item, index) => ({
                                value: item.y,
                                itemStyle: { color: colors[index % colors.length] }
                            })),
                            type: 'bar', // 바 차트로 설정
                        }
                    ]
                });

            } catch (error) {
                console.error('fetch error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='echart_wheel'>
            <h3>Echart Wheelchair Lift numbers</h3>
            {/* ECharts에 옵션이 설정되면 렌더링 */}
            {options && (
                <ECharts
                    option={options}
                />
            )}
        </div>
    );
}
