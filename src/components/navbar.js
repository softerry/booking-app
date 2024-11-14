import React from "react";
import { Link } from "react-router-dom";


export const NavBar = () =>{
    return(
        
        <header>
            <div className="logo">
               <h1>clinic for all</h1>
            </div>
           <nav>
            <ul>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
       </header>
      
    )
}
