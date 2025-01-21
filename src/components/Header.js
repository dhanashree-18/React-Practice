import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

   const [btnNameReact, setBtnNameReact]  = useState("login");

   const onlineStatus = useOnlineStatus();

// if NO dependency array is passed, then useEffect will be called whenever the Header component is rendered.
// if empty dependency [] is passed, then use useEffect will be called at once that s at initial when the page is loaded and header comp is rendered.
// if any dependency passed in the dependency array, then whenever dependency is updated useEffect will be called. 
  
useEffect(()=>
      {console.log("useEffect is called");},
   []);

    return(
       <div className="flex justify-between bg-pink-100 shadow-lg ">
          <div className="logo-container">
             <img className="w-56" src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
             <ul className="flex p-4 m-4">
               <li className="px-4">
                  Online Status: {onlineStatus ? "🟢" : "🔴" }
               </li>
                <li className="px-4">
                <Link to="/">Home</Link></li>
                <li className="px-4">
                  <Link to="/about">About Us</Link>
                  </li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">Cart</li> 
                <button className="login-btn" onClick={()=>{
                  btnNameReact === "login"
                  ? setBtnNameReact("logout"): setBtnNameReact("login");
                  }}>{btnNameReact}</button>
             </ul>
          </div>
       </div>
    )
 };

 export default Header;