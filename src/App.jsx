import { useState ,useEffect} from "react";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const weather=useWeather();
  console.log(weather);
  useEffect(()=>{
    weather.fetchcurrentuserlocation()
  },[])

  return (
    <div className="main">
      <h1>Weather Forecast</h1>
      <div className="inner">
        <Input />
        <Button value="Search" onClick={weather.fetchdata} />
      </div>
      <Card />
      
    </div>
  );
}

export default App;
