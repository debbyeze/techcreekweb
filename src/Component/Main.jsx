import Leftcontainer from "./Leftcontainer";
import Navbar from "./Navbar";
import Rightcontainer from "./Rightcontainer";
import { useState } from "react";

const Main = () => {
    const [nav, setNavbar] = useState (false);
    const handlenavbar = () => setNavbar (!nav);
    return ( 
        <div className="main row">
            <Leftcontainer handlenavbar={handlenavbar}/>
            <Rightcontainer/>
            <Navbar handlenavbar={handlenavbar} nav={nav}/>
        </div>
     );
}
 
export default Main
;