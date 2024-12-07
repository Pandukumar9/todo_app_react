import { useState } from "react"

function Parentsearch(props){

    const [newtask, setNewtask] = useState('');

    return(
         <>
           <input value={newtask} onChange={(e) => {
            setNewtask(e.target.value)
           }}/>
           <button onClick={() => {props.add(newtask)}}>Add todo</button>
        </>
    )
}

export default Parentsearch