import '../styles/Calculator.css';
import { useState } from "react";
import Condirender from "./Condirender";
import Testeffect from "./testeffect";
// import Userlist from "./Userlist";
import StaticImages from "./Staticimages";
import Routeconcept from './Routeconcept';
import Listkey from './Listkey';
import Refhook from './Refhook';
import Custamhook from './Custamhook';
import GetApiData from './Utils';

function Virdom(){
    let [count, setCount] = useState(0);
    function incrementCount(){
        setCount(count + 1);
    }

    let items = [1,2,3,4,5,6,7,8,9,10];
    let isenable= false;
 return(
     <>
       <div>
         <h1>Count: {count}</h1>
         <button onClick={incrementCount}>+</button>
         <ul>
            {
               items.map((item,index) => 
                 <li>Item: {item}</li>
               )
            }
         </ul>
       </div>
       {
        isenable? <Condirender></Condirender> : null

        // isenable & <Condirender></Condirender> 
       }

       <Testeffect></Testeffect>

       {/* <Userlist></Userlist> */}

       <StaticImages></StaticImages>

       <Routeconcept></Routeconcept>

       <Listkey></Listkey>

       <Refhook></Refhook>

       <Custamhook></Custamhook>

       <GetApiData></GetApiData>
     </>
    )
}

export default Virdom;