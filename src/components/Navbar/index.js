import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
        <div class="dropdown">
        <div class="dropbutton">Sections</div>
            <div class="dropdown-content">
                <Link to ="home">Home</Link>
                <Link to="biography">About</Link>
                <Link to ="projects">Projects</Link>
                <Link to ="resume">Resume</Link>
            </div>   
        </div>
    </nav>
    );
  }
  
  export default Navbar;