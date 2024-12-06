import { useMemo, useState } from "react";

function Usememohook(){
  let [counter, setCounter] = useState(1);
    let num1 = 10;
    let num2 = 20;

    let sum = useMemo(() => {
      return num1 + num2;
    },[num1,num2])
    return(
        <>
            <button onClick={() => {
               setCounter(counter+1);
            }}>Update counter</button>
            <h2>Counter : {counter}</h2>
            <h1>Sum : {sum}</h1>
        </>
    )
}

export default Usememohook