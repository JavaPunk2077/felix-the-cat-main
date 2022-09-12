import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <nav className="NavbarItems">
         <h1 className="Ribeye-Marrow-36px">
         <Link to="/">Felix The Cat</Link></h1>
         <div>
             <ul className="nav-menu">
               <li><Link to ='/About'>About</Link></li>
               <>|</>
               <li><Link to ='/News'>News</Link></li>
             </ul>
         </div>
    </nav>
  )
}

export default Navbar;