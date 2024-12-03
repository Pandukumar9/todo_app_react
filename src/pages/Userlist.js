import { useEffect, useState } from "react"
import Productcard from "./Product-card";
// import Staticimages from "./Staticimages";

function Userlist(){
    let [products, productUpdate] = useState([]);


    useEffect(() => {
        getProducts();
    },[])

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products');

        let productsList = await res.json();
        productUpdate(productsList);

        console.log(productsList,'productsList');
    }

    if(products.length === 0){
        return (
          <h1>Fetching data...</h1>
        )
      }
  

    return(
      <>
      <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-6 col-lg-4 mb-4" key={p.id}>
            <Productcard {...p} />
          </div>
        ))}
      </div>
    </div>

    {/* <Staticimages></Staticimages> */}
      </>

    )
}

export default Userlist