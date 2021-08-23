import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "./styles/AccountDetails.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { db } from "../firebase";
import Modal from 'react-modal';

Modal.setAppElement('#root');


function AccountDetails() {
  const [ { user ,address}, dispatch] = useStateValue();
  const [uaddress, setUAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalAddress, setModalAddress] = useState("");
  const [modalCity, setModalCity] = useState("");
  const [modalPincode, setModalPincode] = useState("");


  useEffect(()=> {
    db.collection("users").doc(user?.uid).collection("address").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => (
        dispatch({
          type: "SET_ADD",
          address: doc.data(),
        })
      ));
    });
  }, [dispatch, user?.uid]);

  const addressUpload = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("address").doc("u_add").set({
      address: uaddress,
      city: city,
      pincode: pincode
    })
    setUAddress("");
    setCity("");
    setPincode("");
  };
  const addressUpdate = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("address").doc("u_add").update({
      address: modalAddress,
      city: modalCity,
      pincode: modalPincode
    });
    setModalAddress("");
    setModalCity("");
    setModalPincode("");
    setIsOpen(false);
  };
  const addressDelete = (e) => {
    e.preventDefault();
    db.collection("users").doc(user?.uid).collection("address").doc("u_add").delete().then(()=> {
      dispatch({
        type: "SET_ADD",
        address: "",
      });
    })
    .catch((error)=> console.log(error));
    
  }
  return (
    <div className="account_details">
      <div className="account_details_grp1">
        <h3>Your Email Address : {user?.email}</h3>
        <h3>Your Username : {user?.displayName}</h3>
        <h3>Profile Image :</h3>
        {!user?.photoURL ? "Profile Pic Not Available" : 
        <img src={user?.photoURL} alt="" />
        }
      </div>
      <div className="account_details_grp2">
        {!address ? 
          <form className="address_form">
            <h5>Address</h5>
            <textarea id="address"  value={uaddress} onChange={(e)=> setUAddress(e.target.value.trimStart())} required />
            <h5>City</h5>
            <input type="text" value={city} onChange={(e)=> setCity(e.target.value.trimStart())} required />
            <h5>Pincode</h5>
            <input type="text" value={pincode} onChange={(e)=> setPincode(e.target.value.trimStart())} required maxlength="6" />
            <button disabled={!(uaddress && city && pincode)} onClick={addressUpload}>Submit</button>
          </form> 
        : 
          <div className="address_details">
            <div className="add_logos"> 
            <EditIcon onClick={()=> setIsOpen(true)} className="add_edit_logo" />
            <DeleteIcon className="add_delete_logo" onClick={addressDelete} />
            <Modal
                isOpen={isOpen}
                contentLabel="Edit Address Modal"
                style = {
                  {
                    content: {
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      marginRight: '-50%',
                      transform: 'translate(-50%, -50%)',
                    }
                  }
                }
            >
              <button className="modal_close_btn" onClick={()=> setIsOpen(false)}> X </button>
              <h2 className="modal_h2">Update your Delivery Address</h2>
              <form className="modal_form">
                <h5>Address</h5>
                <input type="text" onChange={(e) => setModalAddress(e.target.value.trimStart())} />
                <h5>City</h5>
                <input type="text" onChange={(e) => setModalCity(e.target.value.trimStart())} />
                <h5>Pincode</h5>
                <input type="text" onChange={(e) => setModalPincode(e.target.value.trimStart())} />
                <button disabled={!(modalAddress && modalCity && modalPincode)} className="modal_btn" onClick={addressUpdate} >Update</button>
              </form>
            </Modal>
             </div>
            <h5>Your Delivering Address:</h5>
            <p> {`Address: ${address?.address}.`} </p>
            <p> {`City: ${address?.city}.`} </p>
            <p> {`Pincode: ${address?.pincode}.`} </p>
          </div>
        }

      </div>
    </div>
  );
}

export default AccountDetails;
