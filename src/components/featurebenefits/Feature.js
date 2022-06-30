import { Link } from "react-router-dom"; 
import React from 'react';

import frontslide from '../mainpage/images/featurelogo.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;


import f1 from '../mainpage/images/l1.png' ;

import f3 from '../mainpage/images/l3.png' ;
import f2 from '../mainpage/images/l2.png' ;

import m1 from '../mainpage/images/mark1.png' ;

import m2 from '../mainpage/images/mark2.png' ;
import m3 from '../mainpage/images/mark3.png' ;
import m4 from '../mainpage/images/mark4.png' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './Feature.css';
import Footer from "../footer/Footer";
import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../mainpage/Main.css'
import '../platinum/gallery-layout.css';

import '../platinum/gallery-layout-2.css';
import '../platinum/center.css';
import Header from './Header-feature'


const Feature = () => {
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
        <div className='center-feature'><b>Features Benefits</b></div>
           
          </div>

          <div className="container-main2">
          <div className='center-feature'><b>Features Benefits</b></div>
        
         <img className='img-front-silver' src={frontslide} />
       
         <Header/>
 
           </div>
      

          <div className='label-feature-2'><b>Our Commitment to Quality</b></div>
       
       <br/>

       
<div className="container-feature">
<h3 className="feature-h3">California Air Resources Board</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is constantly striving to meet and surpass all requirements for high quality cabinetry. As such,<br/> Forevermark Cabinetry products meet the California Air Resources Board’s current standards for<br/> certification. CARB labeling indicating compliance is on each box and product. The California Air Resources <br/>Board regulates air quality by ensuring that materials and air emissions meet the most stringent <br/>requirements. For more Information, please feel free to vist www.arb.ca.gov.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo' src={f1} />

 </div>
  
</div>


<div className="container-feature">
<h3 className="feature-h3">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is proud to offer assembled cabinets that are KCMA crtified. KCMA certified cabinets are<br/> recognized in the marketplace as a quality product able to perform after a rigorous battery of tests<br/> simulating years of household use. For more Information, please feel free to contact our office or<br/> vist.www.kcma.org.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo2' src={f2} />

 </div>
  
</div>


<div className="container-feature">
<h3 className="feature-h3">Kitchen Cabinet Manufacturers Association</h3>
<div className="center-feature-details">
<div className="center-feature-text">
Forevermark is a member at the National Kitchen & Bath Association. Being part of this association keeps<br/> us informed with the latest news and developments in the industry, For more information, please feel free<br/> to contact our offices or vist www.nkba.org.
</div>
</div>
  <div className="top-right-feature">
 
<img className='feature-logo3' src={f3} />

 </div>
  
</div>
<br/><br/><br/>
<div className="feature-in"><h3>FEATURED IN</h3></div>
<div className="pad-feature-mark">
<div className="row-feature-mark">
  <div className="column-feature-mark">
  <img className='mark-mr' src={m1} />
   </div>
  <div className="column-feature-mark">
  <img className='mark-mr' src={m2} />
   </div>
  <div className="column-feature-mark">
  <img className='mark-mr' src={m3} />
    </div>
    
  <div className="column-feature-mark">
  <img className='mark-mr' src={m4} />
    </div>
</div>
</div>
<div className="vl"></div>

<Footer/>
</div>
  )
}

export default Feature;
