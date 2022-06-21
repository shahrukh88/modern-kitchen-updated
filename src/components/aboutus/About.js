import { Link } from "react-router-dom"; 
import React from 'react';

import aboutus from '../mainpage/images/aboutus.svg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import footerlogo from '../mainpage/images/footerlogo.svg' ;
import Footer from "../footer/Footer";

import '../featurebenefits/Feature.css'

import './About.css';
import {Helmet}from"react-helmet-async";




const About = () => {
  return (
    
    <div>
    
    <Helmet>
     <title>Contact</title>
     <meta name="description" content="contact about our company"></meta>
     <link rel="canonical" href="/contact"/>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>

       </Helmet>        
        <div className="container">      
        <div className="nav-main">
           
            <div>
            <img className='logo-img-m' src={kitchenlogo} />
              </div>   
              <div className='links-main'>
          
            
          <Link className="link-main" to="/"> Home</Link>
          <div className="dropdown">
          <Link className="link-main" to="#">Cabinets&nbsp;&nbsp;<FontAwesomeIcon icon="fas fa-caret-down" /></Link>        <div className="dropdown-content">
            <Link className="sub" to="/titainum">Titaninum Collection</Link>
            <Link className="sub" to="/platinum">Platinum Collection</Link>
            <Link className="sub" to="/gold">Gold Collection</Link>
            <Link className="sub" to="/silver">Silver Collection</Link>
              </div>
           </div>
          <Link className="link-main" to="/Contact"> Contact</Link>
          <Link className="link-main" to="/Aboutus"> About</Link>
               
           </div>
          </div>
  
  <img className='img' src={aboutus} />
        <div className='center-about'><b>About Us</b></div>
           
          </div>



<div className="center-about-details">
<div className="center-about-text">
Matrix Cabinets, a wholesale distributor of high-quality cabinets, opened its doors in 2007. We have a<br/> team that has solidified our position as one of the premier cabinet companies in the southeast. Based in<br/> Baxley, Georgia, Matrix Cabinets boasts a 300,000 square feet facility where they keep a constant supply of <br/>inventory. Conveniently located near the port of Savannah, Georgia.
<br/><br/>
In addition to supplying beautiful, high-quality cabinets, Matrix Cabinets prides itself on exceptional <br/>customer service, with a sales support staff of 50 percent bilingual employees. Over the past ten years,<br/> Matrix Cabinets’ attention to craftsmanship, detail, and customer service have made it a preferred choice<br/> in the cabinet industry
 
</div>

</div>


<Footer/>


    
    </div>
  )
}

export default About;
