import Product from "./Product";

function Productlist({data}){
    return(
        <>
          <h2>This is the Productlist component</h2>
          <Product data={data}></Product>
        </>
    )
}

export default Productlist