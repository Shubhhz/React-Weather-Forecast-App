import {createContext,useState,useContext} from "react";
import { getWeatherDataForCity } from "../api";
import { getWeatherDataForLocation } from "../api";
 const WeatherContext=createContext(null);
 
 
 export const useWeather=()=>{
    return useContext(WeatherContext);
 }

 export const WeatherProvider =(props)=>{
    //data of weather(dynamic)
    const[data,setData]=useState(null);
    //city searched by user(dynamic)
    const[searchcity,setSearchCity]=useState();
    const fetchdata=async()=>{
          const response =await getWeatherDataForCity(searchcity);
          setData(response);
    }
    const fetchcurrentuserlocation =async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data));
        })
    }
    return(
        <WeatherContext.Provider value={{setSearchCity,data,searchcity,fetchdata,fetchcurrentuserlocation}}>{props.children}</WeatherContext.Provider>
    )
 }
