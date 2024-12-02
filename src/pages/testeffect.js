import { useEffect, useState } from "react"

function Testeffect(){
    // always it will call
    // useEffect(() => {
    //     console.log('inside use effect')
    // })

    // only onetime called
     let [timer,setTimer] = useState(0);
    // useEffect(() => {
    //     console.log('inside use effect')
    // },[])
    let [counter,setCounter] = useState(0);
    useEffect(() => {
        console.log('inside use effect component')
    },[counter])

    // setInterval(() => {
    //   setTimer(timer + 1);
    // },20000)

    return(
        <>
        <h1>{ console.log("insdie effect")}</h1>
        <h1>Demo of use effect</h1>
        <h3>Timer :  {timer}</h3>

        <button onClick={() => {
            setTimer(timer + 1)
        }}>set timer</button>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>set counter</button>
        </>
    )
}

export default Testeffect