import { nameContext } from "../nameContext";
import { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";


export default function Signup() {
  const unameEx = new RegExp(/^[A-Za-z0-9]+@(lucid.com)/);
  const { user, setUser } = useContext(nameContext);
  const {  setName } = useContext(nameContext);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);
setName("Signup")
  const [msg, setMsg] = useState();
  const [aname,setname]=useState();
  const [uname, setUsername] = useState("");
  const [pass, setPass] = useState("");
  function addUser() {
    if (uname === "" || aname === "" || pass === "") {
      setMsg("Enter all fields.");
    } else if (unameEx.test(uname)) {
      const found = user?.find((usr) => usr.name === uname);
      if (!found) {
        setUser([...user, { name: aname, username: uname, password: pass }]);
        console.log(user);
        setMsg("Account created sucessfully");
      } else {
        setMsg("Account from this username already exist.");
      }
    } else {
      setMsg("Invalid username.");
    }
  }

  return (
    <div style={{backgroundColor:"white",height:"700px"}}>
    <div className="box">
      <h1>Register!</h1>
      Name
      <input
        type="text"
        style={{ marginLeft: "32px" }}
        onChange={(e) => setname(e.target.value)}
      />
      <br />
      <br />
      Username
      <input type="text"  placeholder="example@lucid.com" onChange={(e) =>  setUsername(e.target.value)} />
      <br />
      <br/>
      Password
      <input type="password" onChange={(e) => setPass(e.target.value)} />
      <br />
      <br/>
      <button id="btn" onClick={() => addUser()}>
        SignUp
      </button>
      <h5>{msg}</h5>
      <br />
      <h5>Already have an account?</h5>
      <button id="btn">
        <Link style={{ color: "white" }} to="/login">
          Login
        </Link>
      </button>
    </div>
    </div>
  );
}
