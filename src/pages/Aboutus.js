import { Link, Outlet } from "react-router-dom"

function About(){
    return(
        <>
          <h2>Hi this About cpmpomnent</h2>
          <button><Link to="profile">profile</Link></button>
          <Outlet/>
        </>
    )
}

export default About