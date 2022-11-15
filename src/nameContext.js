import { createContext, useState } from "react";

export const nameContext = createContext();

export function NameProvider({ children }) {
  const [Gname, setName] = useState("Signup");
  const [search, setSearch] = useState("");
  const [results,setResults]=useState([]);
  const [login, checkLogin] = useState("");

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("users")));
  return (
    <nameContext.Provider value={{ Gname, setName,search,setSearch,results,setResults,user,setUser,login,checkLogin}}>
      {children}
    </nameContext.Provider>
  );
}