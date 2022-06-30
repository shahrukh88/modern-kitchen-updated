import React from 'react';
import { Link } from "react-router-dom"; 

import kitchenlogo from '../mainpage/images/kitchenlogo.png' ;


import './featurefooter.css';


const Footer = () => {
  return (
    <div>
   <div className="footer-below">
  <img className='logo-img-footer' src={kitchenlogo} />
  <p className='footer-copyright'>Copyright &copy; 2022 The Modern Kitchens.All Right Reserved.</p>
<div className="link-footer">
<Link className="link-footer-link" to="/Aboutus">About</Link>
<Link className="link-footer-link" to="/Contact">Contact</Link>
<Link className="link-footer-link" to="#">Catalog</Link>
<Link className="link-footer-link" to="/feature">Benefits</Link>
<div className='top-term'>
<Link className="link-footer-link-term" to="/term">Terms & Conditions</Link>
</div>
</div>
   

  </div>

 </div>
  )
}

export default Footer;
