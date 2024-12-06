import Productlist from "./Productlist"

// function Homeee({data}){ for props drilling 
function Homeee(){

    return(
        <>
          <h2>This is the home component</h2>
          {/* <h2>Admin : {data}</h2> */}
          {/* <Productlist data={data}></Productlist> for props drilling */}
          <Productlist></Productlist>
        </>
    )
}

export default Homeee