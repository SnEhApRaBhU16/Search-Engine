import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { nameContext } from "../nameContext";
export default function Login() {
  const { user } = useContext(nameContext);
  const { setName } = useContext(nameContext);
  const { checkLogin } = useContext(nameContext);
  const [msg, setMsg] = useState();
  const [uname, setUname] = useState("");
  const [pass, setpass] = useState("");

  setName("Signup")

  function Validate() {
    if (uname === "" || pass === "") {
      setMsg("Enter all fields.");
    } else {
    const found = user?.find((usr) => usr.username === uname);
  
    if (found) {
      if (found.password === pass) {
        setMsg("Sucessfully logged in..");
        checkLogin(uname)
        setName("mainPage")
      } else {
        setMsg("Invalid password..");
      
      }
    } else {
      setMsg("Accound doesn't exist. Register!");
     
    } 
    }
  }

  return (
    <div style={{backgroundColor:"white",height:"700px"}}>
    <div className="box">
      <h1>Login!</h1>
      Username
      <input type="text" onChange={(e) => setUname(e.target.value)} />
      <br />
      <br />
      Password
      <input type="password" onChange={(e) => setpass(e.target.value)} />
      <br />
      <br />
      <button id="btn" >
      <button onClick={() => Validate()}><Link  >Login</Link> </button> 
      </button>
      <h5>{msg}</h5>
      <br />
      
      <h5>Don't have an account?</h5>
      <button id="btn">
        <Link style={{ color: "white" }} to="/">
          Regsiter
        </Link>
      </button>
    </div>
    </div>
  );
}