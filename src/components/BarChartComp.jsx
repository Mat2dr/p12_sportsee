import { useState, useEffect } from 'react';
import { getUserSession } from '../utils/fetchFromAPI';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 *@name BarChartComp
 *@description Chart to display User sessions
  *@param {number} {props}
 * @return {JSX.Element}} 
 */

const BarChartComp = (props) => {
  const userId = props.userId.id;

  const [userSessions, setUserSessions] = useState('');
  let formatedUserSession = [];

  useEffect(() => {
    async function getUserSessionOnLoad(id) {
      const userData = await getUserSession(id);
      setUserSessions(userData.data.sessions)
    }

    getUserSessionOnLoad(userId);
  }, []);

  //Reformating Sessions label (2022-07-01,...) into (1,...)
  function CustomDatas(data) {
    if (userSessions) {
      //Add the label to the data
      const FormatedSessions = data.map((session, index) => {
        return {
          label: index + 1,
          day: new Date(session.day).toLocaleDateString("en-GB"),
          kilogram: session.kilogram,
          calories: session.calories
        }
      })

      formatedUserSession = FormatedSessions;
    }
  }
  //reformat the data from userAverageSessions
  CustomDatas(userSessions);

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
      <ResponsiveContainer height="100%" width="100%" aspect={4}>
        <BarChart data={ formatedUserSession }>
          <CartesianGrid strokeDasharray="4" vertical={false} />
          <XAxis dataKey="day" stroke='#9B9EAC' tickMargin={20} tickSize={0}/>
          <YAxis dataKey="kilogram" stroke="#282D30" yAxisId="kilogram" orientation="left" axisLine={false} tickMargin={40} tickSize={0} tickCount={3} domain={['dataMin - 1', 'dataMax + 2']}/>
          <YAxis dataKey="calories" stroke="#E60000" yAxisId="calories" orientation="right" axisLine={false} tickMargin={30} tickSize={0} tickCount={3} domain={[0, 'dataMax + 50']}/>
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="kilogram" yAxisId="kilogram" fill="#282D30" barSize={9} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" yAxisId="calories" fill="#E60000" barSize={9} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartComp