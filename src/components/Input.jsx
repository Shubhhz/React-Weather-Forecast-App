import React from "react";
import {useWeather} from "../context/Weather";
export const Input=(props)=>{
  const weather=useWeather();

 
    return(
        <input className="input-field" value={weather.searchcity} placeholder="Search here" onChange={(e)=>{
            weather.setSearchCity(e.target.value);
        }}
            
        />
    )
}