import React from 'react';
import ReactDOM from 'react-dom';
import s3 from './s21.jpg' ;
const Modals3 = ({ isShowings3, hides3 }) => isShowings3 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hides3}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={s3} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modals3;