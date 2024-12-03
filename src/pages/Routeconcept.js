import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./Aboutus";
import Header from "./Header";
import Profile from "./Profile";
import ErrorPae from "./Errorpae";

function Routeconcept(){
    return(
        <>
          <h1>header section</h1>
         
          <BrowserRouter>
             <Header></Header>
             
             <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="about" element={<About></About>}>
                {/* child route */}
                  <Route path="profile" element={<Profile></Profile>}/> 
                </Route>
                <Route path="*" element={<ErrorPae></ErrorPae>}/>
             </Routes>ErrorPae
          </BrowserRouter>
        </>
    )
}

export default Routeconcept