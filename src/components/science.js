import axios from "axios";
import { useState,useEffect} from "react";
import {Card} from "react-bootstrap"

export function Science() {
  const [data, setData] = useState([]);

  function getNews() {
    
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=23ea3b7dd1c84e7b964d9407576c6943"
      )
      .then((response) => {
        setData(response.data.articles)
      });
  };
    return (
      <>
      <div className="container my-3">
       {useEffect(()=>getNews,[])}
      </div>
      <div className="container" style={{backgroundColor:"black",width:"100%",height:"3500px"}}>
        <div className="row">
        {
          data.map((value)=>{
            return(
              <div className="col-3">
                <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={value.urlToImage} alt="no image found" />
        <Card.Body>
          <Card.Title>{value.title}</Card.Title>
          <Card.Text>
            {value.description}
          </Card.Text>
          <a href={value.url}>Know More</a>
        </Card.Body>
      </Card>
              </div>
            );
          })
        }
        </div>
      </div>
      </>
    );
  }