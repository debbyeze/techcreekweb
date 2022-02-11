import logo from "../images/logo-white.png";
import navbar from "../images/ic_nav_toggle.svg";
import location from "../images/ic_location_gr_2.svg"
const Leftcontainer = () => {
    return ( 
        <div className=" left_container bg_img">
            <div  className="first_overlay">
                <div className="rectangle"></div>
           </div>
           <div className="nav"> 
               <img src={navbar} alt="" />
           </div>
           <div className='logo' >
           <img src={logo} alt="logo"  />
           </div>
           <div className="rectangle_text">
                        <h1>A habitat for creativity</h1>

                    </div>
             <div className="second_overlay d-flex">
                 <div className="lemon"></div>
                 <div className="green"></div>

             </div>
             <div className="container pt-3 address d-flex">
                 <img src={location} alt="" />
                 <p >Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng
                  O9030003185, 09030003180</p>

             </div>
        </div>
     );
}
 
export default Leftcontainer;