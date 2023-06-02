import React from 'react';
import './Modal.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal({show, onClose}) {
  const [isShow, setIsShow] = useState(show);

  const handleModal = (evt) => {
    setIsShow(false);
    onClose(evt, false);
  }

  // componentDidUpdate
  useEffect(() => {
    setIsShow(show); 
  }, [show])

  return (
    <div className={ 'modal' + (isShow ? ' show' : '')}>
        <div className="modal-wrap">
          <div className="modal-head">
            <h1>Modal</h1>
          </div>
          <div className="modal-body">

          </div>
          <div className="modal-footer">
            <button className='btn btn-gray' onClick={handleModal}>Close</button>
            <button className='btn btn-primary' onClick={handleModal}>Save</button>
          </div>
        </div>
    </div>
  )
}
