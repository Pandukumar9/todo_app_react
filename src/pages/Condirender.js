function Condirender(){
    let islogined = true;
    return(
        <ul>
            <li>Home</li>
            <li>about us</li>
            <li>services</li>
            {
                islogined?<li>Logout</li> : <li>Login</li>
            }
             
        </ul>
    )
}

export default Condirender;