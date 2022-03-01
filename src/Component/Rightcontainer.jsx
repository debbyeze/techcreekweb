import quote from '../images/quote-left-solid.svg';
import bell from '../images/ic_notification.svg';
import learn from '../images/ic_learn.svg';
import create from '../images/ic_create.svg';
import connect from '../images/ic_connect.svg';
import member from '../images/ic_member.svg';

const Rightcontainer = () => {
    return (
        <div className=" right_container ">
          <div className='notification d-flex'>
            <button>Ongoing Application</button>
            <img src={bell} alt="" />

          </div>
          <div className='quote_img'>
            <img src={quote} alt="" />
          </div>
           <div className="container right_content">
           <h2>Welcome</h2>
           <h2>to the {`<Creek/>`} </h2>
           <p>TechCreek is a habitat for the teeming population of youths making sense of their lives with their digital skills and competencies, and actively involved in the development of the ‘new economy’ from Rivers State.</p>

           <div className='icons pt-4 d-flex'>
            <div className='icon'>
              <img src={learn} alt="" />
              <h6>Learn</h6>
            </div>
            <div className="icon">
              <img src={create} alt="" />
              <h6>Create</h6>
            </div>
            <div className="icon">
              <img src={connect} alt="" />
              <h6>Connect</h6>
            </div>
             


           </div>

           </div>
           <div className='user'>
             <img src={member} alt="" />
           </div>

        </div>
      );
}
 
export default Rightcontainer;