import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Api_key from './api';
import './weather.css';
function Weather() {
        const[details,setDetails]=useState([]);
        useEffect(()=>{
            fetchWeather();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])
        const fetchWeather=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/forecast?q=Nairobi,KE,&appid=${Api_key}&units=metric`
         const {data}=  await axios.get(url).then((res)=>res)
         
            .catch((err)=>console.log(err))
           
            //console.log(details.data);
          console.log(data);
        
            setDetails(data)
            console.log(details)
        }
      

        

  return (
    <div  className='weather-main'>
        
        <div className='weather-box' >
        {details.list?.map((item,index)=>(
                <div className='weather-card' key={index}>
                 
                   <p>Main:{item.weather[0].main}</p>
                   <p>Description:{item.weather[0].description}</p>
                   <p>Temp_Min:{item.main.temp_min}</p>
                   <p>Temp_Max:{item.main.temp_max}</p>
                   <p>Speed:{item.wind.speed}</p>
                   <p>Degree:{item.wind.deg}</p>
                   
                </div>
        ))}
    
        </div>

    </div>
  )
}

export default Weather;