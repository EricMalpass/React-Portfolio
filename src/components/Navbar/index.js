import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
        <div class="dropdown">
        <button class="dropbutton">Sections</button>
            <div class="dropdown-content">
                <Link to="biography">About</Link>
                <Link to ="projects">Projects</Link>
                <Link to ="resume">Resume</Link>
                <Link to ="home">Home</Link>
            </div>   
        </div>
    </nav>
    );
  }
  
  export default Navbar;