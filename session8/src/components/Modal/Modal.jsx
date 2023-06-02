import React from 'react';
import './Modal.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Modal({show, frmData, onClose, onSave}) {
  const [isShow, setIsShow] = useState(show);
  const [formData, setFormData] = useState(frmData);

  const handleModal = (evt) => {
    setIsShow(false);
    onClose(evt, false);
  }
  const handleSave = (evt) => {
    setIsShow(false);
    onClose(evt, false);
    onSave(evt, formData);
  }
  const handleChange = (evt) => {
    if (evt.target.type === "checkbox") {
      setFormData({...formData, [evt.target.name]: evt.target.checked});
    } else {
      setFormData({...formData, [evt.target.name]: evt.target.value});
    }
  }

  // componentDidUpdate
  useEffect(() => {
    setIsShow(show); 
    setFormData(frmData);
  }, [show, frmData])

  return (
    <div className={ 'modal' + (isShow ? ' show' : '')}>
        <div className="modal-wrap">
          <div className="modal-head">
            <h1>User infomation</h1>
          </div>
          <div className="modal-body">
            <div className='form-group'>
              <label htmlFor="userId" className='control-label'>User id</label>
              <input type="text" id='userId' onChange={e => handleChange(e)} name='userId' defaultValue={formData.userId} className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor="username" className='control-label'>User name</label>
              <input type="text" id='username' onChange={e => handleChange(e)} name='username' defaultValue={formData.username} className='form-control' />
            </div>
            <div className='form-group'>
              <label htmlFor="status" className='control-label'>Status</label>
              <label htmlFor="status">
                <input id='status' name='status' onChange={e => handleChange(e)} type="checkbox" defaultChecked={formData.status} /> Active
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button className='btn btn-gray' onClick={handleModal}>Close</button>
            <button className='btn btn-primary' onClick={handleSave}>Save</button>
          </div>
        </div>
    </div>
  )
}
