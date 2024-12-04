import { useRef, useState } from "react"
import '../styles/Refhook.css';

function Refhook(){

    // let ele = useRef();//means without value means empty it will return undefined
    let ele = useRef();

    let x = useRef(10); //after updated the usereff then  it will not rerender so we need to use usestate

    let [y,setY] = useState(100);

    let z = 1000;

    const arr = Array(10).fill(null);
    const heading = useRef([]); // Initialize as an array

    function changestyle(e){
        for(let ele of heading.current){
            ele.classList.remove('primary');
        }
        e.target.classList.add('primary')
    }
    return(
       <>
          <h2 ref={ele} className="active">this is heading tag</h2>

          <div>
      {arr.map((ele, index) => {
        return (
          <h1
            key={index} // Always include a unique key in lists
            ref={(el) => (heading.current[index] = el)} // Assign each element to ref
            onClick={(e) => {
              changestyle(e);
            }}
          >
            this is heading tag {index + 1}
          </h1>
        );
      })}
      <button
        onClick={() => {
          console.log(heading);
          console.log(heading.current); // Logs the array of references
          heading.current.forEach((el, idx) => {
            if (el) console.log(`Heading ${idx + 1} innerHTML:`, el.innerHTML);
          });
        }}
      >
        headings
      </button>
    </div>


          <button onClick={() => {
            console.log(ele.current);
            console.dir(ele.current);
            // ele.current.innerHTML = 'cHANGED CONTENT'; //this is content modified
            ele.current.classList.toggle('active');
            ele.current.classList.toggle('inactive');
          }}>click</button>

          <h1>x value : {x.current}</h1>
          <h1>z value : {z}</h1>
          
          <button onClick={() => {
            x.current = x.current + 10;
            console.log(x.current);

            setY(y+100);
          }}>Increment</button>
       </>
    )
}

export default Refhook