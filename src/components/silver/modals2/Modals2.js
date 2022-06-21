import React from 'react';
import ReactDOM from 'react-dom';
import s2 from './s2.jpg' ;
const Modals2 = ({ isShowings2, hides2 }) => isShowings2 ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hides2}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
            
     <img className='picmodal' src={s2} />      
          
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modals2;