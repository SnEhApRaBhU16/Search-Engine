import "../App.css";
import axios from "axios";
import { NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import { nameContext } from "../nameContext";
import {useContext} from "react"
import background from "../images/pexels-cz-jen-12093114.jpg"
export function Weather(){
  const { setName } = useContext(nameContext);
  const [fact, setWeather] = useState("");
  const [weather, setWeat] = useState("");
  const getfact = async () => {
    const dataFromServer = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=27.20&lon=77.49&appid=ce4a6e2f1d06f41d2e219236999a5633"
    );
    setWeather(dataFromServer.data.main);
    setWeat(dataFromServer.data.wind);
  };
  return (
    <div className="App" >
       <div id="header"
      style={{
        display: "flex"
      }}
    >
      <NavLink  className={({isActive})=>(isActive? setName("others") :setName("mainPage"))}  id="news"
        to="/news"
        style={({ isActive }) => ({ color: isActive ? "lightblue":"white",textDecoration:"none"})}
      >
        News
      </NavLink>
      <NavLink className={({isActive})=>(isActive? setName("others"):{})} id="weather"
        to="/weather"
        style={ ({ isActive }) => ({ color: isActive ? "lightblue" : "white",textDecoration:"none" })}
      >
        Weather
      </NavLink>
      
</div >
<div style={{backgroundImage:`url(${background})`,width:"100%",height:"700px"}}>
      {useEffect(()=>getfact,[])}
      <h1>Weather forecast</h1>
      
      <div className="container">
        <h3>
          Temperature: <br />
          {fact.temp}
        </h3>
        <h3>
          Minimum temperature: <br />
          {fact.temp_min}
        </h3>
        <h3>
          Pressure: <br />
          {fact.pressure}
        </h3>
      </div>
      <div className="container">
        <h3>
          Humidity: <br />
          {fact.humidity}
        </h3>
        <h3>
          Ground level: <br />
          {fact.grnd_level}
        </h3>
        <h3>
          Sea level: <br />
          {fact.sea_level}
        </h3>
      </div>
      <div className="container">
        <h3>
          wind speed: <br />
          {weather.speed}
        </h3>
        <h3>
          wind degree:
          <br /> {weather.deg}
        </h3>
        <h3>
          wind gust: <br />
          {weather.gust}
        </h3>
      </div>
    </div>
    </div>
  );
  }
  
