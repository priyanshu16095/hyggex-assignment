import React, { useState } from 'react'
import Modal from './Modal.jsx'

function ModalPopUp() {
    const[showModal, setShowModal] = useState(false)
    return (
        <div className='modalpage'>

            <div className="modalpageBody flex-v">
                <p className="title">Modal Pop-Up</p>
                <div className="modalpageContainer bigContainer flex-v">
                    <p className="md-font">Page</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reiciendis commodi, quis explicabo, natus illo cum quod, adipisci non quaerat consequatur. Itaque esse nemo aperiam aspernatur consectetur natus provident mollitia.</p>
                    <button className='button' onClick={() => setShowModal(true)}>Show Modal</button>
                    {showModal && <Modal onClose={() => setShowModal(false)} />}
                </div>
            </div>

        </div>
    )
}

export default ModalPopUp
