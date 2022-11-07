import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const RadarChartComp = (props) => {

  const [userPerf, setUserPerf] = useState('');
  let formatedUserPerf = [];

  useEffect(() => {
    fetchFromAPI(`user/${props.userId.id}/performance`).then((data) => setUserPerf(data.data.data));
  }, []);
  

    //Reformating perf label (1,2,3,...) into (Intensité,Vitesse,Force,...)
    function CustomDatas(perfs) {
      const labels = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
      }
  
      if (userPerf) {
        //Add the label to the data
        const FormatedSessions = perfs.map((perf) => {
        return {
          value: perf.value,
          kind: perf.kind,
          label: labels[perf.kind]
        }
        })
  
        formatedUserPerf = FormatedSessions;
      }
    }
    //reformat the data from userAverageSessions
    CustomDatas(userPerf);

  return (
    <div id='radar-charts'>
        <ResponsiveContainer height="100%" width="100%" aspect={1}>
            <RadarChart margin={{ top: 0, bottom: 0, left: 25, right: 25}} outerRadius="80%" startAngle={210} endAngle={570} data={ formatedUserPerf }>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="label" tickLine={false} axisLine={true} stroke="#FFFFFF"/>
                <Radar name="value" dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default RadarChartComp