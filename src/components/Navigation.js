import { NavLink } from "react-router-dom";
import { nameContext } from "../nameContext";
import {useContext} from "react"
import {Search} from "./searchBar.js"
export function Nav() {
  const { setName } = useContext(nameContext);
  const { checkLogin } = useContext(nameContext);
  setName("mainPage")
  checkLogin("")
  return (
    <div>
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
      
</div>
<Search/> 
</div>
  );
}