import { Link } from "react-router-dom"; 
import React from 'react';


import '../platinum/modal/Modal.css';

import Modal from "./modals1/Modals1";
import Modals2 from "./modals2/Modals2";
import Modals3 from "./modals3/Modals3";

import useModal1 from "./modals1/useModal";
import useModals2 from "./modals2/useModals2";
import useModals3 from "./modals3/useModals3";

import frontslide from './images/silverlogo.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import p1 from './images/s1.jpg' ;
import p2 from './images/s2.jpg' ;
import p3 from './images/s3.jpg' ;
import p4 from './images/s4.jpg' ;
import p5 from './images/s5.jpg' ;
import p6 from './images/s6.jpg' ;
import p7 from './images/s7.jpg' ;
import p8 from './images/s8.jpg' ;
import p9 from './images/s9.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';

import '../platinum/gallery-layout.css';
import '../platinum/center.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './silver.css';


const Silver  = () => {

  const {isShowing, toggle} = useModal1();
  const {isShowings2, toggles2} = useModals2();
  const {isShowings3, toggles3} = useModals3();
  
  return (
    <div>
        
        
        <div className="container">
        <div className='center-pl-s'><b>Silver Collection</b></div>
      <div className='center-pl2-s'>Our Silver Collection features the K-Series line of cabinets, which are designed with a timeless, traditional door profile and versatile color palette to give any kitchen an updated, classic look.</div>
   
        <div className="nav-main">
           
           <div>
           <img className='logo-img-m' src={kitchenlogo} />
             </div>   
             <div className='links-main'>
         
           
         <Link className="link-main" to="/"> Home</Link>
         <div className="dropdown">
         <Link className="link-main" to="#">Cabinets&nbsp;&nbsp;<FontAwesomeIcon icon="fas fa-caret-down" /></Link>             <div className="dropdown-content">
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
<div className="top-left-gall1"> <div className="rope-galls1">K-Cherry Glaze (KC)</div>
  <div className="top-left2-galls1">The K-Cherry Glaze cabinet line is the perfect choice for a warm, inviting kitchen of timeless beauty. With our Forevermark limited warranty, you can be assured that these cabinets are reliable and durable enough to stand the test of time and use.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
     <button className="spec2-galls1" onClick={toggle}>VIEW SPECS SHEET</button>
    <Modal
      isShowing={isShowing}
      hide={toggle}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p1} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-gall1" src={p2} /></div>
</div>




<div class="container-g2">
  <div className="bottom-left"></div>
  <div class="top-left-g2"><img className="pl-g12" src={p4} /></div>
   <div className="top-right-s1">K-Cinnamon Glaze (KM)</div>
  <div className="bottom-right">
   <img className='pl-g-layout-s2' src={p6} />  

    <div className="bottom-right-2-s2">
    
    <div className=""> Our K-Cinnamon Glaze line features the timeless elegance of natural wood cabinets, finished in classic cinnamon tones. Designed with quality and reliability at the forefront, these cabinets provide a beautiful and durable update to any kitchen.</div>
    <div className="">
    <ul className="ul1-gall-layout">
     <li>Constructed of solid birch</li>
     <li>Undermount, full extension drawer glides with soft closing feature</li>
     <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
     <li>Concealed 6-way adjustable soft close door hinges</li>
     </ul>
    <div className="" >
    <button className="spec2-gall2-s2" onClick={toggles2}>VIEW SPECS SHEET</button>
    <Modals2
      isShowings2={isShowings2}
      hides2={toggles2}
    />
    </div>
</div>
     </div>
     <div class="centered-mid-s2"><img className="pl-glayout" src={p5} /></div>

  </div>
  
  

</div>



<div className="container-g3">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-galls3">K-Espresso (KE)</div>
  <div className="top-left2-galls3">Our K-Espresso line provides the beauty of natural wood finish with darker espresso tones, giving kitchens an updated, modern look. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     
     </ul>  
     <div className="" >
     <button className="spec2-gall2" onClick={toggles3}>VIEW SPECS SHEET</button>
    <Modals3
      isShowings3={isShowings3}
      hides3={toggles3}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>

  <div className="centered-galls1"><img className="pl3-galls1" src={p8} /></div>


</div>







 
<div>
         
 




<div className="marg-b">m</div>



 </div>


<Footer/>
    
    </div>
  )
}

export default Silver;
