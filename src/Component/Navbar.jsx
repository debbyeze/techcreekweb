
import { Link } from 'react-router-dom';
import navClose from '../images/ic_nav_close.svg';



const Navbar = ({nav, handlenavbar}) => {
    
    return ( 
        <>
           <div className={nav ? "nav_body" : "nav_none"} >
           <div className='nav_close' onClick={handlenavbar}>
           <img src={navClose} alt="" onClick={handlenavbar}/>
           </div>
            <div className="nav">
                <ul >
                    <li><Link to='/Learn'>Learn</Link></li>
                    <li><Link to='/'>Create</Link></li>
                    <li><Link to='/'>Connect</Link></li>
                    <li><Link to='/'>Members</Link></li>
                </ul>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;