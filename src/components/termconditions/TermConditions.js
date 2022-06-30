import { Link } from "react-router-dom"; 
import React from 'react';

import frontslide from '../mainpage/images/term.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import Footer from "../footer/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TermCondition.css';


import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';

import '../platinum/gallery-layout.css';


import '../platinum/center.css';
import Header from './Header-term'

import '../featurebenefits/Feature.css'


const TermConditions = () => {
  return (
    <div>
        <div className="container-main1">      
        <div className="nav-main">
           
           <div>
           <img className='logo-img-m' src={kitchenlogo} />
             </div>   
             <div className='links-main'>
         
           
         <Link className="link-main" to="/"> Home</Link>
         <div className="dropdown">
         <Link className="link-main" to="#">Cabinets&nbsp;&nbsp;<FontAwesomeIcon icon="fas fa-caret-down" /></Link>      
           <div className="dropdown-content">
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

  
  <img className='img' src={frontslide} />
        <div className='center-term'><b>Terms & Conditions</b></div>
           
          </div>
          <div className="container-main2">
          <div className='center-term-2'><b>Terms & Conditions</b></div>
       
         <img className='img-front-term' src={frontslide} />
       
         <Header/>
 
           </div>
      



<div className="center-term-details">
 <div className="center-term-text">
<p className="sm-font">Payments</p> 
 
<p className="sm-medium"> Matric Cabinets accepts various forms of payment; cash, check, certified check, Visa, Mastercard,<br/> American Express, E Check and Wire Transfer. **Matric cabinets reserves the right to request certified<br/> check for any order at any time.</p>

<p className="sm-font">Credit Accounts</p> 
 
<p className="sm-medium"> Matrix Cabinets will not be opening new credit accounts at this time. Please contact your sales<br/> representative for details.</p>
 <p className="sm-font">Taxes and Exemptions</p>
 
 <p className="sm-medium">Matrix Cabinets requires resale certificates for all dealers in every state<br/>
Resale certificates can be faxec to Matrix Cabinets office at (xxx)xxx-xxxx</p>
<p className="sm-font">Returned Checks</p>

<p className="sm-medium">Matrix Cabinets will charge an $35 returned check fee for all returned checks. In Addition, any promotional <br/>discounts will be removed from the invoice and the dealer is responsible for paying the difference. Any<br/> returned checks must be paid in full before additional shipments can be processed. Matrix Cabinets <br/>reserves the right to request cash, credit card, or certified check payments for shipments from any dealer<br/> with multiple returned checks.</p>
 </div>

</div>

<Footer/>



    
    </div>
  )
}

export default TermConditions;
