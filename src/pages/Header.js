import { Link } from "react-router-dom";

function Header(){
    return(
        <>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* this is from react dom library it will only perticular route */}
            <li><Link to="/about">About</Link></li>
            {/* but this is normal from html if we click this then loadd entire dom */}
            <li><a href="/about">About</a></li>
          </ul>
        </>
    )
}

export default Header