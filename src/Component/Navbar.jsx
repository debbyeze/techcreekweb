import navClose from '../images/ic_nav_close.svg';






const Navbar = ({nav, handlenavbar}) => {
    
    return ( 
        <div className={nav ? "nav_body" : "nav_none"} >
           <div className='nav_close' onClick={handlenavbar}>
           <img src={navClose} alt="" onClick={handlenavbar}/>
           </div>
            <div className="nav">
                <ul >
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Create</a></li>
                    <li><a href="#">Connect</a></li>
                    <li><a href="#">Members</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;