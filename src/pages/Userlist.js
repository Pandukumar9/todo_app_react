import { useEffect, useState } from "react"
import Productcard from "./Product-card";
function Userlist(){
    let [products, productUpdate] = useState([]);


    useEffect(() => {
        getProducts();
    },[])

    async function getProducts(){
        let res = await fetch('https://jsonplaceholder.typicode.com/users');

        products = await res.json();

        console.log(products,'productsList');
    }

    // if(products.length === 0){
    //     return (
    //       <h1>Fetching data...</h1>
    //     )
    //   }
  

    return(
        products.map((p) => <Productcard {...p}></Productcard>)  
    )
}

export default Userlist