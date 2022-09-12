import React from "react";
import './Button.css';
import { Link } from "react-router-dom";
import About from "../../About/About.js";

const Button =() =>{
  return(
      <div>
          <Link to = "/About">
            <button class="button"> 
                <span>続きを見る</span>
            </button>
           </Link>
      </div>
  )
}

export default Button
