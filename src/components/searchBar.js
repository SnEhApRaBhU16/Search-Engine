import {useState} from "react"
import "../App.css"
import axios from "axios";
import { NavLink } from "react-router-dom";
import { nameContext } from "../nameContext";
import {useContext} from "react"


export function Search() {
  const { setResults,setSearch,user} = useContext(nameContext); 
  const [ani, setAni] = useState("");
  const [toggle,setToggle]=useState("false")
  const [dta, setData] = useState("");
  function bored(ani) {
    if (toggle === true) {
      setAni("");
      setToggle(false);
      
    } else {
      setAni(ani);
      setToggle(true);
      
    }
  }
  function getDataFn(event) {
    setData(event.target.value);
    setSearch(event.target.value);
  }
  
  async function googleSearch()  {
      const data  = await axios.get(
          "https://www.googleapis.com/customsearch/v1",
      {
        params: {
          key: "AIzaSyBxPx0YKspTLa1z-iNZ2Sl8aqCpIXnxpBI",
           cx: "902c66f1cc455423f" ,
           
          q: dta,
        },
      }
      )
  setResults(data.data.items);
   console.log(data.data.items);

    
  };

  return (
      <div id="mainSearch" > 
      <h4 style={{fontSize: "90px",fontWeight:"bold",marginLeft:"-55px",marginTop:"120px"}}>LUCID</h4>
        <input placeholder="Search here" onChange={getDataFn} style={{marginTop:"100px"}} className={ani} type="search" />
        
    <button > <NavLink style={{color:"black",textDecoration:"none",fontWeight:"bold"}}  onClick={googleSearch} to="/srchResults">Search</NavLink ></button>
        <button className="anibtn" id="vibrate" onClick={ () => bored("vibrate")}>
        Vibrate
      </button>
      <button className="anibtn" id="wobble" onClick={() => bored("wobble")}>
        Wobble
      </button>
      <button className="anibtn" id="bounce" onClick={() => bored("bounce")}>
        Bounce
      </button>
      </div>
    );
  }