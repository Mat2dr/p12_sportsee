import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Presentation , Recap , BarChartComp, LineChartComp , RadarChartComp , PieChartComp } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';



const Feed = () => {
  let params = useParams();

  return (
    <div id='Feed'>
        <Presentation userId={ params }/>
        <div className='data-recap'>
          <div className='charts-div'>
            <BarChartComp userId={ params }/>
            <div className='charts-div-line-2'>
              <LineChartComp userId={ params }/>
              <RadarChartComp userId={ params }/>
              <PieChartComp userId={ params }/>
            </div>
          </div>
          <div className='recaps-div'>
            <Recap type="Calories" userId={ params }/>
            <Recap type="Proteines" userId={ params }/>
            <Recap type="Glucides" userId={ params }/>
            <Recap type="Lipides" userId={ params }/>
          </div>
        </div>
  </div>
  )
}

export default Feed