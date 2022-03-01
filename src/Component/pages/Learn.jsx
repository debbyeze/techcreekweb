import navbar from "../pages/ic_nav_toggle.svg";
import { useState } from "react";
import Navbar from "../Navbar";

const Learn = () => {
    const [nav, setNavbar] = useState (false);
    const handlenavbar = () => setNavbar (!nav);
    return ( 
        <>
      <Navbar handlenavbar={handlenavbar} nav={nav}/>
        <div className="learn_container row">
             <div className="navbar" >
                 <div className="nav">
                     <img src={navbar} alt="" onClick={handlenavbar}/>
                 </div>
             </div>
             
        </div>
        </>
     );
}
 
export default Learn;