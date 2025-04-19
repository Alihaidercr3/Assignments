import logo0 from "../../../public/logo0.png";
import { NavLink } from "react-router-dom";
export const Header = () =>{
   return <header className="section-navbar">
   <div className="container">
     <div className="navbar-brand">
        <img src={logo0} alt="logo" style={{paddingLeft:"250px"}} />
     </div>
     <nav className="navbar">
       <ul>
         <li className="nav-item">
           <NavLink to="/"  style={({ isActive }) => {return{color: isActive? "green" : "white  "}}}npm  className="nav-link"  >
             Home
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/About"  style={({ isActive }) => {return{color: isActive? "green" : "white"}}} className="nav-link">
             About
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/Buying"  style={({ isActive }) => {return{color: isActive? "green" : "white"}}} className="nav-link">
            Buying
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/Renting"  style={({ isActive }) => {return{color: isActive? "green" : "white"}}} className="nav-link">
             Renting
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/Selling"  style={({ isActive }) => {return{color: isActive? "green" : "white"}}} className="nav-link">
             Selling
           </NavLink>
         </li>
         <li className="nav-item">
           <NavLink to="/Contact"  style={({ isActive }) => {return{color: isActive? "green" : "white"}}} className="nav-link">
             contact
           </NavLink>
         </li>
         <li style={{paddingLeft: "100px"}}>
          <NavLink>
            <button className="nav-item" style={{fontWeight:"bold"}}  >Login In</button>
            </NavLink>
         </li>
         <li>
         <NavLink>
            <button className="btn" style={{fontWeight:"bold"}}>Sign Up</button>
         </NavLink>
         </li>
       </ul>
     </nav>
   </div>
 </header>
  
};