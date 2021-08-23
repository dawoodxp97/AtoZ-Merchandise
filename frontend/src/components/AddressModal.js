import React from 'react'
import "./styles/AddressModal.css";
function AddressModal({closeModal}) {
    return (
        <div className="address_modal">
            <div className="modal_container">
                <div className="closeBtn"></div>
                <button onClick={()=> {closeModal(false)}}> X </button>
                <div className="modal_title">
                    <h1>Enter your Address</h1>
                </div>
                <div className="modal_body">
                    <p>HJE</p>
                </div>
                <div className="modal_footer">
                    <button>Submit</button>
                </div>
            </div>
            
        </div>
    )
}

export default AddressModal
