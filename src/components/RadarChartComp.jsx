import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarChartComp = (props) => {

  const [userPerf, setUserPerf] = useState('');

  useEffect(() => {
    fetchFromAPI(`user/${props.userId.id}/performance`).then((data) => setUserPerf(data.data.data));
  }, []);

  return (
    <div id='radar-charts'>
        <ResponsiveContainer width="100%" aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" startAngle={210} endAngle={570} data={ userPerf }>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="kind" tickLine={false} axisLine={true} stroke="#FFFFFF"/>
                <Radar name="value" dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComp