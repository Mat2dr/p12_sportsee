import { useState, useEffect } from 'react';
import { getUserPerf } from '../utils/fetchFromAPI';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 *@name RadarChartComp
 *@description Chart to display the perf of the user
 *@param {number} {props}
 * @return {JSX.Element}} 
 */
const RadarChartComp = (props) => {
  const userId = props.userId.id;

  const [userPerf, setUserPerf] = useState('');
  let formatedUserPerf = [];

    useEffect(() => {
      async function getUserPerfOnLoad(id) {
        const userData = await getUserPerf(id);
        setUserPerf(userData.data.data);
      }
  
      getUserPerfOnLoad(userId)
    }, []);
  

    //Reformating perf label (1,2,3,...) into (Intensité,Vitesse,Force,...)
    function CustomDatasPerf(perfs) {
      const labels = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité",
      }
  
      if (userPerf) {
        //Add the label to the data
        const FormatedSessions = perfs.map((perf) => {
          return {
            valuePerf: parseInt(perf.value),
            kind: perf.kind,
            label: labels[perf.kind],
          }
        })
  
        formatedUserPerf = FormatedSessions;
      }
    }
    //reformat the data from userPerf
    CustomDatasPerf(userPerf);

  return (
    <div id='radar-charts'>
        <ResponsiveContainer height="100%" width="100%" aspect={1}>
            <RadarChart data={ formatedUserPerf } margin={{ top: 0, bottom: 0, left: 25, right: 25}} outerRadius="80%" startAngle={210} endAngle={570}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="label" tickLine={false} axisLine={true} stroke="#FFFFFF"/>
                <Radar name="valuePerf" dataKey="valuePerf" stroke="transparent" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComp