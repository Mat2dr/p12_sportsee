import { useState, useEffect } from 'react';
import { getUserInfos } from '../utils/fetchFromAPI';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const PieChartComp = (props) => {
    const userId = props.userId.id;
    const [userScore, setUserScore] = useState('');

    useEffect(() => {
      async function getUserInfosOnLoad(id) {
        const userData = await getUserInfos(id);
        setUserScore(userData.data.todayScore)
      }
  
      getUserInfosOnLoad(userId)
    }, []);

    const CustomLegend = ({ payload }) => (
        <div className="custom-legend">
          <div className="label">{payload[0].payload.value * 100}%</div>
          <div className="label"><p>de votre objectif</p></div>
        </div>
      );


  return (
    <div id='pie-charts'>
        <p>Score</p>
        <ResponsiveContainer width="100%" aspect={1.3}>
        <PieChart width={400} height={400}>
          <Pie data={[
            { name: "score", value: userScore },
            { name: "total", value: 1 - userScore },
          ]} 
          dataKey='value' cx="50%" cy="50%" outerRadius="100%" innerRadius="90%" startAngle={90} endAngle={450} fill="#FF0000">
            <Cell fill="#FF0000" stroke="#FF0000" cornerRadius="50%"/>
            <Cell fill="#FFFFFF" stroke="#FFFFFF" />
          </Pie>
          <Pie
            cx={"50%"}
            cy={"50%"}
            outerRadius={"90%"}
            fill="#FFF"
            data={[{ name: "shadow-circle", value: 100 }]}
            dataKey="value"
          />
          <Legend
            verticalAlign="middle"
            align="center"
            content={CustomLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieChartComp