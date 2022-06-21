import { Link } from "react-router-dom"; 
import React from 'react';
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;
import Footer from "../footer/Footer";

import contact from './images/contact.jpg' ;
import map from './images/map.png' ;
import Captcha from './Captcha';
import {Helmet}from"react-helmet-async";
import '../mainpage/footer.css';
import './contact.css';
import './contact-form.css';
import '../featurebenefits/Feature.css'
import Map from './SimpleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'




const Contact = () => {
  return (
    <div>
     <Helmet>
     <title>Contact</title>
     <meta name="description" content="contact about our company"></meta>
     <link rel="canonical" href="/contact"/>
     <script src='https://www.google.com/recaptcha/api.js'></script>     
    </Helmet>        


    
    <div className="container">
    <div className='center-contact'><b>Contact Us</b></div>
        <div className='center-contact2'>Our staff is always available, please take a moment to fill out the 
           form below.</div>
    
    <div className="nav-main">
           
           <div>
           <img className='logo-img-m' src={kitchenlogo} />
             </div>   
             <div className='links-main'>
         
           
         <Link className="link-main" to="/"> Home</Link>
         <div className="dropdown">
         <Link className="link-main" to="#">Cabinets&nbsp;&nbsp;<FontAwesomeIcon icon="fas fa-caret-down" /></Link>            <div className="dropdown-content">
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
        
             
      <img className='img' src={contact} />
     

        </div>
        
 

       

<div className="container-contact-form">
  <form >
  <label className="label-text" for="fname">Full Name</label>
    <input  type="text" id="fname" name="fname" placeholder="Your name.."/>
    <div class="row-contact">
       <div className="column-contact" >
       <label className="label-text"  for="phone">Phone</label>
       <input   className="pad-contact" type="text" id="phone" name="phone" placeholder="Contact number"/>
       </div>
     <div className="column-contact" >
     <label  className="margright" for="email">Email</label>
     <input  className="margright2" type="text"id="email"name="lastname"placeholder="someone@example"/>
     </div>
     </div>
     <label className="label-text"  for="comment">Questions or Comments</label>
    <textarea className="comment-contact" id="comment" name="subject" placeholder="Write something.." ></textarea>
    <div class="row-contact">
       <div className="column-contact" >
       <div className="width-captcha">  <Captcha/></div>
       </div>
     <div className="column-contact" >
     <input className="sbmit-form" type="submit" value="SUBMIT"/>
 
     </div>
     </div>
    
    

   </form>
</div>

<div className="vl"></div>
<div className="row-map">
  <div className="column-map" >
    
  <img className='map-img' src={map} />
  <div>
  <div className="icons-contact"><FontAwesomeIcon icon="fa-solid fa-phone" /><a className="contact-icon" href="tel:912-366-9300">Phone:(912) 366-9300</a></div>
  <div className="icons-contact"><FontAwesomeIcon icon="fa-solid fa-fax" /><a className="contact-icon" href="Fax:912 366-0122">Fax:(912) 366-0122</a></div>
  <div className="icons-contact"><FontAwesomeIcon icon="fa-solid fa-envelope" /><a className="contact-icon" href="mailto:team@themodernkitchen.com"> team@themodernkitchen.com </a></div>

  </div>
      </div>
  <div className="column-map" >
    <Map/>
  </div>
</div>





<div><br/><br/></div>
<Footer/>

    </div>
  )
}

export default Contact;
