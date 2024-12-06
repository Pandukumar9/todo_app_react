import Product from "./Product";
// function Productlist({data}){ //this is for  drilling props
function Productlist(){
    return(
        <>
          <h2>This is the Productlist component</h2>
          {/* <Product data={data}></Product> */}
          <Product></Product>
        </>
    )
}

export default Productlist