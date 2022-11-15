import { NavLink,Outlet} from "react-router-dom";
import { nameContext } from "../nameContext";
import {useContext} from "react"
export function News() {
  const { setName } = useContext(nameContext);
return (
    <div className="newspage">
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
          <div style={{marginTop:"30px", display: "flex", gap: "10px", justifyContent: "center" }}>
     
       
       
       
        <div className="rectangle" id="sports"><NavLink to="/news/entertainment" style={{color:"white",textDecoration:"none",fontWeight:"bold"}}>Entertainment</NavLink></div>
      <div className="rectangle" id="inter"> <NavLink to="/news/health" style={{color:"white",textDecoration:"none",fontWeight:"bold"}} >Health</NavLink></div>
      <div className="rectangle" id="science"> <NavLink to="/news/science" style={{color:"white",textDecoration:"none",fontWeight:"bold"}} >Science</NavLink></div>
      <div className="rectangle" id="health"> <NavLink to="/news/sports" style={{color:"white",textDecoration:"none",fontWeight:"bold"}} >Sports</NavLink></div>
      <div className="rectangle" id="health"><NavLink to="/news/business" style={{color:"white",textDecoration:"none",fontWeight:"bold"}} >Business</NavLink> </div>
      <div className="rectangle" id="health"> <NavLink to="/news/technology" style={{color:"white",textDecoration:"none",fontWeight:"bold"}} >Technology</NavLink> </div>
        </div> 
        
        <Outlet/>
      </div>

  );
}