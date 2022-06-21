import { Link } from "react-router-dom"; 
import React from 'react';
import '../platinum/modal/Modal.css';

import Modalg1 from "../platinum/modal/Modalg1";
import Modalg2 from "../platinum/modal/Modalg2";
import Modalg3 from "../platinum/modal/Modalg3";
import useModalg1 from '../platinum/modal/useModalg1';
import useModalg2 from '../platinum/modal/useModalg2';
import useModalg3 from '../platinum/modal/useModalg3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import frontslide from './images/gslide.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import p1 from './images/white.jpg' ;
import p2 from './images/g2.jpg' ;
import p3 from './images/g3.jpg' ;
import p4 from './images/g4.jpg' ;
import p5 from './images/white2.jpg' ;
import p6 from './images/g6.jpg' ;
import p7 from './images/g7.jpg' ;
import p8 from './images/g8.jpg' ;
import p9 from './images/g9.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';
import '../platinum/gallery-layout.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';


import './gold.css';



const Gold  = () => {

  const {isShowingg1, toggleg1} = useModalg1();
  const {isShowingg2, toggleg2} = useModalg2();
  const {isShowingg3, toggleg3} = useModalg3();

  return (
    <div>
        
        
        <div className="container">
        <div className='center-pl-g'><b>Gold Collection</b></div>
      <div className='center-pl2'>Our versatile and elegant Gold Collection cabinets come in an array of designs and finishes, perfect for elevating the style and feel of your kitchen. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come. Select styles feature Waterborne UV Finishes from Sherwin Williams and Greenguard Gold certification, which ensures that a product is acceptable for use in sensitive indoor places.</div>
    
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
    
      <img className='img-front' src={frontslide} />
          </div>


          <div className="container-gall1">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallg1header">K-White (KW)</div>
  <div className="top-left2-gallg1lay">The timeless elegance and versatility of the K-White cabinets provides a classic canvas for your kitchen that is only limited by the imagination.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
     <button className="spec2-gallg1spec" onClick={toggleg1}>VIEW SPECS SHEET</button>
     <Modalg1
      isShowingg1={isShowingg1}
      hideg1={toggleg1}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p2} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-goldl1" src={p1} /></div>
</div>






<div class="container-g2">
  <div className="bottom-left"></div>
  <div class="top-left-g2"><img className="pl-g12" src={p6} /></div>
   <div className="top-right-g1lay">Ice White Shaker (AW)</div>
  <div className="bottom-right">
   <img className='pl-g-layout-g2' src={p4} />  
   

    <div className="bottom-right-2-g2lay">
    
    <div className=""> The Ice White Shaker collection features a clean, simple design that pairs well with any layout or color scheme. Its versatility makes it a popular choice in both modern and traditional homes. The Ice White finish lends a clean, classic look for an elegant kitchen update.</div>
    <div className="">
     
    <ul className="ul1-gall-layout">
    
     <li>Constructed of solid birch</li>
     <li>Undermount, full extension drawer glides with soft closing feature</li>
     <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
     <li>Concealed 6-way adjustable soft close door hinges</li>
    <li>Waterborne UV Finish</li>
    <li>Greenguard Gold Certified</li>
    </ul>
    <div className="" >
    <button className="spec2-gall2-g2" onClick={toggleg2}>VIEW SPECS SHEET</button>
    <Modalg2
      isShowingg2={isShowingg2}
      hideg2={toggleg2}
    />
  </div>
</div>
     </div>
     <div class="centered-mid-g2gold"><img className="pl-glayout" src={p5} /></div>

  </div>
  
  

</div>



<div className="container-g3">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallg3header">Pepper Shaker (AP)</div>
  <div className="top-left2-galls1">With its warm, inviting finish and intricate panel detailing, Sienna Rope provides an elegant, timeless update and classic beauty to the kitchen.

    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      <li>Waterborne UV Finish</li>
      <li>Greenguard Gold Certified</li>
     </ul>  
     <div className="" >
     <button className="spec2-gallg3spec" onClick={toggleg3}>VIEW SPECS SHEET</button>
     <Modalg3
      isShowingg3={isShowingg3}
      hideg3={toggleg3}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>
<div className="centered-galls1"><img className="pl3-gold3" src={p8} /></div>

</div>

<div className="marg-b">m</div>



 
<div>
         
 







 </div>


<Footer/>
    
    </div>
  )
}

export default Gold;
