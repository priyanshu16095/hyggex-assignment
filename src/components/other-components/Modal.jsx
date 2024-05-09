import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Modal({ onClose }) {
  return (
    <div className='modal center-both'>

      <div className="modalBody flex-v">
        <div className="modalHeader flex-s">
          <p className='title gradient-text'>Add Card</p>
          <button onClick={onClose}><CloseIcon/></button>
        </div>
        <div className="modalContent flex-v">
          <input type="text" placeholder='Card Name' />
          <textarea placeholder='Conent' cols="30" rows="5" className='messageInput contactInput' />
        </div>
        <div className="modalFooterButton flex-h">
          <button className="button" onClick={onClose}>Add</button>
        </div>
      </div>

    </div>
  )
}

export default Modal
