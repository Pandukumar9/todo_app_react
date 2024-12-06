import { useContext } from "react"
import { context } from "../App"

// function Product({data}){
function Product(){

  let data = useContext(context);

    return(
        <>
          <h2>This is the Product component</h2>
          {/* <h2>Isadmin : {data}</h2> */}
          
          <p>Price: {data.price}</p>
          <p>Name : {data.name}</p>
        </>
    )
}

export default Product