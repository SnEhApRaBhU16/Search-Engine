import "../App.css"
import { NavLink } from "react-router-dom";
import { nameContext } from "../nameContext";
import {useContext,useState} from "react";
import axios from "axios";
import {Card,Figure} from 'react-bootstrap';

export function Results() {
    const { setName} = useContext(nameContext);
    const{search, setSearch}=useContext(nameContext)
    const [dta, setData] = useState("");
    const{results,setResults}=useContext(nameContext);
    setName("others2")
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
              cx: "902c66f1cc455423f",
              q: dta,
            },
          }
        );
        setResults(data.data.items);
        console.log(data.data.items);
      };
return(
    
    <div>

         <input value={search} onChange={getDataFn} style={{marginTop:"20px"}}  type="search" />
         <button><NavLink style={{color:"black",textDecoration:"none",fontWeight:"bold"}} onClick={googleSearch} >Search</NavLink>  </button> 
         {
         results.map((value)=>{
            return(
                <li key={value.cacheId}>
              <div >
                
                 <Card>
                 <Card.Header as="h5">  <a href={value.formattedUrl}>{value.formattedUrl}</a></Card.Header>
                
      <Card.Body>
        <Card.Title><div dangerouslySetInnerHTML={{ __html: value.htmlTitle }} /></Card.Title>
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: value.htmlSnippet }} />
        </Card.Text>
        <Figure >
                 <Figure.Image style={{marginLeft:"1200px",marginTop:"-20px"}}
        width={211}
        height={210}
        alt=""
        src={value.pagemap.cse_image?.map(im=>{return(im.src)})}
        //class="rounded float-right"

      />
      
    </Figure> 
      </Card.Body>
    </Card>
                </div>
                </li>
                  )})
            }
</div>

 )}