import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComp = (props) => {

  const [userSessions, setUserSessions] = useState('');

  useEffect(() => {
    fetchFromAPI(`user/${props.userId.id}/activity`).then((data) => setUserSessions(data.data.sessions));
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} kg`}</p>
          <p className="label">{`${payload[1].value} kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div id='bar-charts'>
      <div className='bar-charts-header'>
        <p>Activité quotidienne</p>
        <ul className='bar-charts-header-legend'>
          <li>Poids (kg)</li>
          <li>Calories brûlées (kcal)</li>
        </ul>
      </div>
      <ResponsiveContainer width="100%" aspect={4}>
        <BarChart data={ userSessions }>
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <XAxis dataKey="day" tickMargin={20} tickSize={0}/>
          <YAxis dataKey="kilogram" stroke="#282D30" yAxisId="kilogram" orientation="right" axisLine={false} tickMargin={40} tickSize={0} tickCount={3} domain={['dataMin - 1', 'dataMax + 2']}/>
          <YAxis dataKey="calories" stroke="#E60000" yAxisId="calories" orientation="left" axisLine={false} tickMargin={30} tickSize={0} tickCount={3} domain={[0, 'dataMax + 50']}/>
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30" barSize={9} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" yAxisId="calories" fill="#E60000" barSize={9} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComp