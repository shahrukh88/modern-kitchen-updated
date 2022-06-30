import { Link } from "react-router-dom"; 
import React from 'react';
import './modal/Modal.css';

import Modal1 from "./modal/Modal1";

import Modal2 from "./modal/Modal2";
import Modal3 from "./modal/Modal3";
import Modal4 from "./modal/Modal4";
import Modal5 from "./modal/Modal5";
import Modal6 from "./modal/Modal6";
import Modal7 from "./modal/Modal7";
import useModal1 from './modal/useModal1';
import useModal2 from './modal/useModal2';
import useModal3 from './modal/useModal3';
import useModal4 from './modal/useModal4';
import useModal5 from './modal/useModal5';
import useModal6 from './modal/useModal6';
import useModal7 from './modal/useModal7';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import frontslide from './images/platfront.jpg' ;
import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;

import p1 from './images/p1.jpg' ;
import p2 from './images/p2.jpg' ;
import p3 from './images/p3.jpg' ;
import p4 from './images/p4.jpg' ;
import p5 from './images/p5.jpg' ;
import p6 from './images/p6.jpg' ;
import p7 from './images/p7.jpg' ;
import p8 from './images/p8.jpg' ;
import p9 from './images/p9.jpg' ;
import p10 from './images/p10.jpg' ;
import p11 from './images/p11.jpg' ;
import p12 from './images/p12.jpg' ;
import p13 from './images/p13.jpg' ;
import p14 from './images/p14.jpg' ;
import p15 from './images/p15.jpg' ;
import p16 from './images/p16.jpg' ;
import p17 from './images/p17.jpg' ;
import p18 from './images/p18.jpg' ;
import p19 from './images/p19.jpg' ;
import p20 from './images/p20.jpg' ;
import p21 from './images/p21.jpg' ;

import Footer from "../footer/Footer";

import "../mainpage/Main.css";

import './Main2.css';

import './gallery.css';

import './gallery-layout.css';

import './gallery-layout-2.css';
import './gallery2.css';

import './gallery3.css';
import './center.css';
import Header from './Header-plat'




const Platinum = () => {

  const {isShowing1, toggle1} = useModal1();
  const {isShowing2, toggle2} = useModal2();
  const {isShowing3, toggle3} = useModal3();
  const {isShowing4, toggle4} = useModal4();
  const {isShowing5, toggle5} = useModal5();
  const {isShowing6, toggle6} = useModal6();
  const {isShowing7, toggle7} = useModal7();
  return (
    <div>
        
        
        <div className="container-main1">
        <div className='center-pl'><b>Platinum Collection</b></div>
      <div className='center-pl2'><div className="textop">With classic comfort and sophisticated refinement, the Platinum Collection features an array of cabinet choices to beautifully update any kitchen. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come. Select styles feature Waterborne UV Finishes from Sherwin<br/>Williams and Greenguard Gold certification, which ensures that a product is acceptable for use in sensitive indoor places.</div></div>
    
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

          <div className="container-main2">
          <div className='center-pl-2'><b>Platinum Collection</b></div>
      <div className='center-pl2-2'><div className="textop">With classic comfort and sophisticated refinement, the Platinum Collection features an array of cabinet choices to beautifully update any kitchen. As all Forevermark cabinets are designed with the utmost quality and durability, you can rest assured that your kitchen will be beautiful and functional for years to come. Select styles feature Waterborne UV Finishes from Sherwin<br/>Williams and Greenguard Gold certification, which ensures that a product is acceptable for use in sensitive indoor places.</div></div>
    
         <img className='img-front-silver' src={frontslide} />
       
         <Header/>
 
           </div>
      
 

<div className="container-gall1">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gall1">Sienna Rope (MR)</div>
  <div className="top-left2-gall1">With its warm, inviting finish and intricate panel detailing, Sienna Rope provides an elegant, timeless update and classic beauty to the kitchen.
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
     <button className="spec2-gall1" onClick={toggle1}>VIEW SPECS SHEET</button>
     <Modal1
        isShowing1={isShowing1}
        hide1={toggle1}
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
<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2-p2">Gramercy White (GW)</div>
  <div className="top-left2-gall-lay2-p2"> Clean lines and versatility make the Gramercy White a popular choice for an updated and timeless look in your kitchen.
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
     <button className="spec2-gall2-g2" onClick={toggle2}>VIEW SPECS SHEET</button>
    <Modal2
      isShowing2={isShowing2}
      hide2={toggle2}
    />
     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p5} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p4} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-lay2-p1" src={p6} /></div>
  
   
</div>



<div className="container-g3">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gall3">Signature Pearl (SL)</div>
  <div className="top-left2-gall3">For an old world, sophisticated kitchen, the Signature Pearl cabinet line is the perfect choice for its antique design and intricate detail.
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
     <button className="spec2-gallp3" onClick={toggle3}>View spec sheet</button>
     <Modal3
        isShowing3={isShowing3}
        hide3={toggle3}
      />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p7} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p9} /></div>

  <div className="centered-galls1"><img className="pl3-gallp3" src={p8} /></div>

</div>


<div class="container-g4">
  
<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2-p2">Uptown White (TW)</div>
  <div className="top-left2-gall-lay2-p2"> Clean lines, simple design, and versatility never go out of style. The Uptown White cabinet line lends a classic, updated look to any kitchen.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     </ul>  
     <div className="" >
    <button className="spec2-gall2-g2" onClick={toggle4}>VIEW SPECS SHEET</button>
    <Modal4
        isShowing4={isShowing4}
        hide4={toggle4}
      />
  </div> 
    </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p12} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p10} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-lay2-p4" src={p11} /></div>
  
   
   </div>



<div className="container-g5">

<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallp5">Town Square Grey (TS)</div>
  <div className="top-left2-gallp5">Contemporary design, flat doors, and clean lines make the Town Square Grey line the perfect choice for a modern, striking contrast in the kitchen.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     
     </ul>  
     <div className="" >
     <button className="spec2-gallp5" onClick={toggle5}>VIEW SPECS SHEET</button>
    <Modal5
      isShowing5={isShowing5}
      hide5={toggle5}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p13} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p15} /></div>

  <div className="centered-galls1"><img className="pl3-gallp5" src={p14} /></div>



</div>




<div class="container-g6">

<div className="bottom-left-lay2"></div>
<div className="top-left-gall-lay2"> <div className="rope-gall-lay2-p6">Greystone Shaker (AG)</div>
  <div className="top-left2-gall-lay2-p6"> Enjoy the same contemporary look and feel of a classic shaker cabinet but with a textured finish that gives interest and depth to the kitchen design.
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
    <button className="spec2-gall2-g2" onClick={toggle6}>VIEW SPECS SHEET</button>
    <Modal6
        isShowing6={isShowing6}
        hide6={toggle6}
      />
  </div>
    </div>
 </div>
   <div className="">
   <img className='pl1-gall-lay2' src={p18} /> 
   </div>

</div>

<div className="top-right-gall-lay2"><img className="pl2-gall-lay2" src={p16} /></div>

  <div className="centered-gall-lay2"><img className="pl3-gall-lay2-p6" src={p17} /></div>
  


</div>



<div className="container-g7">
<div className="bottom-left-gall1"></div>
<div className="top-left-gall1"> <div className="rope-gallp7">Lait Grey Shaker (AB)</div>
  <div className="top-left2-gallp7">For a softer, yet contemporary kitchen, the Lait Grey Shaker is the perfect cabinet choice. The clean lines and warm grey provide a soothing, comfortable atmosphere.
    <div>
     <ul className="ul1-gall-layout">
      <li>Constructed of solid birch</li>
      <li>Undermount, full extension drawer glides with soft closing feature</li>
      <li>Pre-installed, color-coated metal clip that won’t tarnish</li>
      <li>Concealed 6-way adjustable soft close door hinges</li>
      
     
     </ul>  
     <div className="" >
     <button className="spec2-gallp7" onClick={toggle7}>VIEW SPECS SHEET</button>
    <Modal7
      isShowing7={isShowing7}
      hide7={toggle7}
    />


     </div>

    </div>
 </div>
   <div className="">
   <img className='pl1-gall1' src={p19} /> 
   </div>

</div>

<div className="top-right-gall1"><img className="pl2-gall1" src={p21} /></div>

  <div className="centered-galls1"><img className="pl3-gallplat7" src={p20} /></div>



</div>



<div className="marg-pl"></div>


 
<div>
         
 

<Footer/>






 </div>


    
    </div>
  )
}

export default Platinum;
