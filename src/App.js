import "./App.css";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";

import {News} from "./components/news.js";
import {Weather} from "./components/weather.js"
import {Business} from "./components/business.js"
import {Entertainment} from "./components/entertainment.js"
import {Health} from "./components/health.js"
import {Science} from "./components/science.js"
import {Sports} from "./components/sports.js"
import {Results} from "./components/results.js"
import {Technology} from "./components/technology.js"
import {Routes, Route,Link,Navigate} from "react-router-dom";
import {Nav} from "./components/Navigation.js"
import { nameContext } from "./nameContext";
import {useContext} from "react"

function Header() {
  return (
    <div id="header">
      <h5
        style={{
          fontSize: "22px",
          position: "relative",
          marginRight: "1000px",
          fontWeight:"bold"
        }}
      >
        LUCID
      </h5>
      <Link className="link" style={{ marginLeft: "350px" }} to="/">
        Signup
      </Link>
      <Link className="link" style={{ marginLeft: "500px" }} to="/login">
        Login
      </Link>
    </div>
  );
}

 function App() {
   const { Gname,login} = useContext(nameContext);
   
  return (
    <div className="App">
       {Gname==="Signup" && <Header /> }
  <Routes>
      <Route path="/" element={<Signup />} />
        <Route path="/login" element={login!=="" ?<Navigate to="/navigation" /> : <Login />}></Route>
       
        <Route path="/navigation" element={<Nav />}></Route>
        
        <Route  path="/news" element={<News />} >
       
          <Route   path="business" element={<Business/>} />
          <Route  path="entertainment" element={<Entertainment />} />
          <Route   path="health" element={<Health />} />
          <Route  path="science" element={<Science/>} />
          <Route  path="sports" element={<Sports  />} />
          <Route  path="technology" element={<Technology/>} />
        </Route>
        
        <Route path="/weather" element={<Weather />} />
        <Route path="/srchResults" element={<Results />} />
        </Routes>

        </div>
       
   
  );
}
export default App;
