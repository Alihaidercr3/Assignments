import logo1 from '../../public/logo1.png';
import logo2 from '../../public/logo2.png';
import logo3 from '../../public/logo3.png';
import logo4 from '../../public/logo4.png';
import logo6 from '../../public/logo6.png';
import overlay2 from '../../public/overlay2.png';
import pic1 from '../../public/pic1.png';

export const Home = () => {
  return <div>
    <div style={{paddingLeft: '150px'}}>
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />  
    <h1 style={{fontSize: "50px"}}> Perfect Way to Buy </h1>
     <br />
     <h1 style={{fontSize: "50px"}}>And sell A Home </h1>
     <br /><br />
      <p style={{fontSize:"10px",fontWeight:"200"}}>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua <br/> dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
    <br /><br />
    <br /><br />
    <table>
      <tr>
        <td className="dropdown">
          <button className="dropbtn">Purpose</button>
          <div className="dropdown-content">
          <a href="#">Buy</a>
          <a href="#">Rent</a>
           <a href="#">sell</a>
          </div> 
        </td>
        <td className="dropdown"> 
          <button className="dropbtn">Location</button>
          <div className="dropdown-content">
          <a href="#">city</a>
          <a href="#">village</a>
           <a href="#">countryside</a>
          </div>
        </td>
        <td className="dropdown">
          <button className="dropbtn">Type</button>
          <div className="dropdown-content">
          <a href="#">comercial</a>
          <a href="#">residential</a>
           <a href="#">industrial</a>
          </div>
          </td>
        <td className="dropdown"> 
        <button className="button">Search</button>
        </td>
         {/* <td><img src="../../public/pic1.png" /></td>  */}
      </tr>
    </table>
    <br /><br />  
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
  <h1>Featured In</h1>
   <br /><br />
   <br />
      <div className='row'> 
      <div className='column' ><img src="../../public/logo4.png"  /></div>
      <div className='column'><img src="../../public/logo3.png"/> </div>
      <div className='column'><img src="../../public/logo6.png" /></div>
      <div className='column'><img src="../../public/logo2.png" /></div>
      <div className='column'><img src="../../public/logo1.png" /></div>
      </div>
      </div>
      <br /><br />
      <br /><br />
      <div className='backgroundoverlay'>
        <img style={{width:"100%"}} src="../../public/overlay2.png" />
      <div className='centered-text'>
      </div>
      </div>
      <br /><br />
      <br /><br />
      <br /><br />
      <h1 className='page3'>Why to Chose Us</h1>
      
    </div>
  
    


 }; 