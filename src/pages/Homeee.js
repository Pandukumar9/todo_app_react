import Productlist from "./Productlist"

function Homeee({data}){

    return(
        <>
          <h2>This is the home component</h2>
          {/* <h2>Admin : {data}</h2> */}
          <Productlist data={data}></Productlist>
        </>
    )
}

export default Homeee