
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    } from "react-router-dom";
    import React from 'react';
    import { Link } from "react-router-dom";
  import { useEffect } from "react";
  import './Header-silver.css'
  import '../mainpage/Main.css'
  import'../mainpage/dropdown.css'
  import {Helmet} from "react-helmet";
  import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;  
    
    function Header() {
      useEffect(() => {
          
    let navbar = document.querySelector(".navbar");
    
    
  
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
    }
    
    
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    htmlcssArrow.onclick = function() {
     navLinks.classList.toggle("show1");
    }
      let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
     navLinks.classList.toggle("show3");
    }
    
          // use jquery here if you must, this way the component is loaded 
          //and the dom matches whats in react (or should)
        }, []);
    return (
      <>
        <Helmet>
       
  
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
              </Helmet>
            
        <nav>
        <div className="logo">   <div>
           <img className='logo-img-m2' src={kitchenlogo} />
             </div>   
         </div>
      <div className="navbar">
        <i className='bx bx-menu'></i>
       
        <div className="nav-links">
          <div className="sidebar-logo">
            <i className='bx bx-x' ></i>
          </div>
          <ul className="links">
            <li> <Link className=""  to="/"> Home</Link></li>
            <li>
            <Link  to="#">Cabinets</Link>
        
              <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li>    <Link  className="" to="/titainum">Titaninum Collection</Link></li>
                <li> <Link  className="" to="/platinum">Platinum Collection</Link></li>
                <li> <Link  className="" to="/gold">Gold Collection</Link></li>
                 <li>           <Link  className="" to="/silver">Silver Collection</Link></li>  
              </ul>
            </li>
            <li>    <Link style={{color: ""}} className="" to="/Contact"> Contact</Link></li>
            <li>         <Link style={{color: ""}} className="" to="/Aboutus"> About</Link></li>
            <li>    <Link style={{color: ""}} className="" to="/feature"> Benefits</Link></li>
            <li>         <Link style={{color: ""}} className="/term" to="/Aboutus">Terms & Conditions</Link></li>
          
            <li>
              <a href="#"></a>
              <i className='js-arrow arrow '></i>
              <ul className="js-sub-menu sub-menu">
                 </ul>
            </li>
            </ul>
        </div>
      
      </div>
    </nav>        
   </>
    );
    }
    
    export default Header;
    