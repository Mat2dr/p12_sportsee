import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComp = (props) => {

  const [userAverageSessions, setUserAverageSessions] = useState('');

  useEffect(() => {
    fetchFromAPI(`user/${props.userId.id}/average-sessions`).then((data) => setUserAverageSessions(data.data.sessions));
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} min`}</p>
          </div>
        );
      }
    
      return null;
    };

  return (
    <div id='line-charts'>
        <p className='line-charts-title'>Durée moyenne des sessions</p>
        <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
            width={270}
            height={270}
            data={ userAverageSessions }
        >
        <XAxis dataKey="day" tickMargin={20} tickSize={0} axisLine={false} stroke="#FFFFFF"/>
        <YAxis dataKey="sessionLength" hide />
        <Tooltip content={<CustomTooltip />} />
        <Line dataKey="sessionLength" type="sessionLength" stroke="#FFFFFF" activeDot={{ r: 8 }} />
        </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default LineChartComp