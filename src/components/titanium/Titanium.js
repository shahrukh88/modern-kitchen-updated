import { Link } from "react-router-dom"; 
import React from 'react';

import '../platinum/modal/Modal.css';

import Modalt1 from "../platinum/modal/Modalt1";
import Modalt2 from "../platinum/modal/Modalt2";
import Modalt3 from "../platinum/modal/Modalt3";
import useModalt1 from '../platinum/modal/useModalt1';
import useModalt2 from '../platinum/modal/useModalt2';
import useModalt3 from '../platinum/modal/useModalt3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import frontslide from './images/tslide.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import p1 from './images/t1.jpg' ;
import p2 from './images/t2.jpg' ;
import p3 from './images/t3.jpg' ;
import p4 from './images/t4.jpg' ;
import p5 from './images/t5.jpg' ;
import p6 from './images/t6.jpg' ;
import p7 from './images/t7.jpg' ;
import p8 from './images/t8.jpg' ;
import p9 from './images/t9.jpg' ;

import Footer from "../footer/Footer";

import '../platinum/Main2.css';

import '../platinum/gallery.css';
import '../platinum/gallery2.css';

import '../platinum/gallery3.css';
import '../platinum/center.css';




const Titaninum  = () => {

  const {isShowingt1, togglet1} = useModalt1();
  
  const {isShowingt2, togglet2} = useModalt2();
  
  const {isShowingt3, togglet3} = useModalt3();
  return (
    <div>
        
        
        <div className="container">
        <div className='center-pl'><b>Titaninum Collection</b></div>
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
<div className="top-left-gall1"> <div className="rope-gall1-tit">Nova Light Grey Shaker (AN)</div>
  <div className="top-left2-gall1-tit">These classic shaker cabinets feature a subtle wood grain look that lends interest to the kitchen design. Clean lines provide a fresh feel to any kitchen.
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
     <button className="spec2-gall2" onClick={togglet1}>VIEW SPECS SHEET</button>
     <Modalt1
        isShowingt1={isShowingt1}
        hidet1={togglet1}
              />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p1} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p3} /></div>

  <div className="centered-gall1"><img className="pl3-galltti1" src={p2} /></div>
</div>




<div class="container-g2">
  <div className="bottom-left"></div>
  <div class="top-left-g2"><img className="pl-g12" src={p6} /></div>
   <div className="top-right-t2lay">Midtown Grey (TG)</div>
  <div className="bottom-right">
   <img className='pl-g-layout-g2' src={p4} />  
   

    <div className="bottom-right-2-t2lay">
    
    <div className=""> For a contemporary, modern look, the Midtown Grey cabinets are the perfect choice for a clean, updated feel.</div>
    <div className="">
    <ul className="ul1-gall-layout">
    
    <li>Constructed of solid birch</li>
     <li>Undermount, full extension drawer glides with soft closing feature</li>
     <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
     <li>Concealed 6-way adjustable soft close door hinges</li>
    <li>Waterborne UV Finish</li>
    </ul>
    <div className="" >
    <button className="spec2-gall2-g2" onClick={togglet2}>VIEW SPECS SHEET</button>
    <Modalt2
         isShowingt2={isShowingt2}
         hidet2={togglet2}
              />
          
    </div>
</div>
     </div>
     <div class="centered-mid-g2tit"><img className="pl-glayout" src={p5} /></div>

  </div>
  
  

</div>



<div className="container-g3">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallt3">Townplace Crema (TQ)</div>
  <div className="top-left2-gallt3">The Townplace Crema cabinets are the perfect choice for a soft, inviting kitchen. With detailing on the door panels and clean lines, they lend an updated, yet cozy feel to the kitchen.
    <div>
     <ul className="ul1-gall-layout">
     <li>Constructed of solid birch</li>
    <li>Undermount, full extension drawer glides with soft closing feature</li>
    <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
    <li>Concealed 6-way adjustable soft close door hinges</li>
    
     
     </ul>  
     <div className="" >
     <button className="spec2-gallt3" onClick={togglet3}>VIEW SPECS SHEET</button>
     <Modalt3
                isShowingt3={isShowingt3}
                hidet3={togglet3}
              />
          

     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>

  <div className="centered-galls1"><img className="pl3-galltit3" src={p8} /></div>


</div>






<div className="marg-b">m</div>


 
<div>
         
 







 </div>


<Footer/>
    
    </div>
  )
}

export default Titaninum;
