import Header from "./Components/Header"
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Er from "./Pages/Er";
import Cli  from "./Pages/Cl2";
import Ceil from "./Pages/Ceil";
import Admin from "./Pages/Admin";
import { Example } from "./Pages/Example";
// import GridsterExample from "./Pages/GridsterExample";
import GridProperty from "./Pages/GridProperty";

export default function App() {
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
   {/* <Example/>
   {/* <GridsterExample/> */}
{/* <GridProperty/> */}
    </div>
    </BrowserRouter>
  );
}




