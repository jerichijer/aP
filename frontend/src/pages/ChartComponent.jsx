import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ChartComponent = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/chart-data')
        .then(res => res.json())
        .then(data => setChartData(data));
    }, []);


    return (
        <LineChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='attendance_percentage' />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="exam_score" stroke='#8884d8' />
        </LineChart>
    );
};

export default ChartComponent;