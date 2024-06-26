import React from "react";
//step1 after ui
const baseUrl ="https://api.weatherapi.com/v1/current.json?key=7c8d5abc12fa4453874140533242606&q="
export const getWeatherDataForCity=async(city)=>{
      const response = await fetch(`${baseUrl}${city}&aqi=no`);
      return await response.json();
}

export const getWeatherDataForLocation=async(lat,long)=>{
      const response = await fetch(`${baseUrl}${lat},${long}&aqi=no`);
      return await response.json();
}