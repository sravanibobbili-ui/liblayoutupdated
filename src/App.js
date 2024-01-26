import Header from "./Components/Header"
import { BrowserRouter,Routes, Route} from "react-router-dom";
import React, {useEffect, useContext, useState} from "react";

import Er from "./Pages/Er";
import Cli from "./Pages/Cli";
import Ceil from "./Pages/Ceil";
import Admin from "./Pages/Admin";

import {AuthService} from "./services/AuthService";


import AuthContext from './context/AuthProvider';

function App() {
  let [ddata, setDdata] = useState({
    role: 'norole',
});
  

let performrolecall = async () =>{
  //console.log("hereeee");
 await AuthService.getAuthDataFromKey().then((response) => {
  
  //console.log("hertttttt");
  const roledata = response.role;
  //console.log(roledata);
  setDdata({
      ...ddata,
      role: roledata
  })

});
  //set usecontext auth data here
}
  




//window.localStorage.setItem("authreturn", JSON.stringify(authdataa));

let { auth } = useContext(AuthContext);
let authdataa = auth;
//console.log(authdataa);

useEffect(() => {
if (auth && Object.keys(auth).length <= 0) {

  performrolecall();


}
else {
  setDdata({
    ...ddata, 
    role: auth.role})
}
}, [auth]);



let norole = {role:"norole"};
let authdata = JSON.parse(window.localStorage.getItem("authreturn"))!== null? JSON.parse(window.localStorage.getItem("authreturn")): norole;
window.localStorage.removeItem("authreturn");
//value && Object.keys(value).length === 0;
//JSON.stringify(value) === '{}'

//console.log(authdata.role);
//let role = authdata.role;
//console.log(role);

//console.log(authdata);
//let role = authdata.role;
//let usern = authdata.user_name;
//let pswd = authdata.pass_word;
//console.log(role);
//console.log(usern);
//console.log(pswd);


  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
          
          <Route path ='/Er' element={<Er/>}></Route>
          <Route path ='/Cli' element={<Cli/>}></Route>
          <Route path ='/Admin' element={<Admin/>}></Route>
          <Route path ='/Ceil' element={<Ceil/>}></Route>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
