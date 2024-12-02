import Keypad from "./keypad";
import '../styles/Calculator.css';
import { useState } from "react";


function Virdom(){
    let [count, setCount] = useState(0);
    function incrementCount(){
        setCount(count + 1);
    }

    let items = [1,2,3,4,5,6,7,8,9,10];
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
     </>
    )
}

export default Virdom;