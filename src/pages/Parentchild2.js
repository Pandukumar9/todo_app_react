import { useState } from "react"
import Parentsearch from "./Parentsearch";

function Parentchild2(){
    let [todos, updateTodos] = useState([
        'task 1',
        'task 2'
    ]);

    const addNew = (task) => {
        updateTodos([...todos,task]);
    }
    return(
        <>
         
          <ul>
            {
                todos.map((t) => 
                  <li>{t}</li>
                )
            }
          </ul>

          <Parentsearch add={addNew}></Parentsearch>
          
        </>
    )
}

export default Parentchild2