import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getUserAverageSession } from '../Services/getUserAverageSession';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 *@name PieChartComp
 *@description Chart to display the average sessions of the user
 *@param {number} {props}
 * @return {JSX.Element}} 
 */
const LineChartComp = (props) => {
  const userId = props.userId.id;

  const [userAverageSessions, setUserAverageSessions] = useState('');
  let formatedUserAverageSessions = [];

  useEffect(() => {
    async function getUserAverageSessionOnLoad(id) {
      const userData = await getUserAverageSession(id);
      setUserAverageSessions(userData.sessions)
    }

    getUserAverageSessionOnLoad(userId);
  }, []);

   /**
     * @name CustomDatas
     * @description Reformating day (1,2,3,...) into (L,M,M,...)
     * @param {Object} {userSessions}
     * @return {JSX.Element}} 
    */
  function CustomDatas(userSessions) {
    const daysOfTheWeek = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D"
    }

    if (userSessions) {
      //Add the letter of the day to the data
      const FormatedSessions = userSessions.map((session) => {
        return {
          sessionLength: session.sessionLength,
          day: session.day,
          dayLetter: daysOfTheWeek[session.day]
        }
      })

      //Add before and after session to make the graph is full width
      const sessions = [
        { day: 0, sessionLength: 0, dayLetter : ' ' },
        ...FormatedSessions,
        //Positive last session to motivate the user
        { day: FormatedSessions.length + 1, sessionLength: FormatedSessions[FormatedSessions.length - 1].sessionLength + 1, dayLetter : ' ' },
      ]

      formatedUserAverageSessions = sessions;
    }
  }
  //reformat the data from userAverageSessions
  CustomDatas(userAverageSessions);

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

    const CustomHover = ({ points }) => {
      return (
        <rect x={points[0].x} y="0" height='100%' width="100%" fill="rgba(0, 0, 0, 0.1)"/>  
      ) 
    }

  return (
    <div id='line-charts'>
      <p className='line-charts-title'>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height='100%' aspect={1}>
        <LineChart margin={{ top: 85, bottom: 40, left: -20, right: -20}} data={ formatedUserAverageSessions }>
          <XAxis dataKey="dayLetter" tickMargin={20} tickSize={0} axisLine={false} stroke="#FF8080"/>
          <YAxis dataKey="sessionLength" hide />
          <Tooltip content={<CustomTooltip />} cursor={<CustomHover />}/>
          <Line dataKey="sessionLength" type="natural" stroke="#FFFFFF" activeDot={{ r: 5 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartComp

LineChartComp.propTypes = {
  formatedUserAverageSessions: PropTypes.array
};