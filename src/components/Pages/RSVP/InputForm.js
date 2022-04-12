import React, { useState, useEffect } from "react";
import './InputForm.scss';
import { weddAppRef } from "../../../firebase";
import { ref, child, get, set } from "firebase/database";

const InputForm = () => {

  const [isFromShown, setIsFormShown] = useState(false);

  const [invitationID, setInvitationID] = useState('');

  const [form,setForm] = useState(null);

  const fetchInvitation = () => {
    if (invitationID.length === 0) {
      alert("Please enter the invitation ID given by the coordinator.")
      return;
    }
    console.log(form);
    const dbRef = ref(weddAppRef);
    get(child(dbRef, invitationID.trim())).then((snapshot) => {
      
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('searchButton').style.display = 'none';
        setForm(snapshot.val());
      } else {
        alert("Invalid Invation ID (Please contact coordinator)");
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleSubmit = e => {

    set(ref(weddAppRef, invitationID), {
      invitees : form.invitees,
      attending : form.attending,
      isGoing : form.isGoing,
      name : form.name
    })
    .then(() => {
      alert("Response submitted successfully! Thank you");
      window.location.reload();
    })
    .catch((error) => {
      alert("Error on submitting response. Pleas try again.");
    });

  };

  const handleChange = e => {
    setForm({...form, [e.target.name] : e.target.value});
    console.log(form);
  };

  const handleEnter = (e) => {
    if(e.key === 'Enter') {
      fetchInvitation();
    }
  };

  useEffect(() => {
    if(form) 
      setIsFormShown(true);
  },[form]);

  return (
    <div class="rsvp-box">
      <h2>Response here</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <div class="user-box">
          <input type="text" name="invitationID" value={invitationID} onChange={e => setInvitationID(e.target.value)} onKeyDown={e => handleEnter(e)} autoComplete="off"/>
          <label>Invitaiton ID</label>
        </div>
        <button id="searchButton" type="button" onClick={fetchInvitation}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Search
        </button>
        {isFromShown && (
          <>
        <div class="user-box">
          <input type="text" value={form ? form.name : 'Invalid Invitation'} name="name" onKeyDown={(event) => event.preventDefault()} autoComplete="off"/>
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="number" max={form ? form.invitees : 0} value={form ? form.attending : 0} min='0' name="attending" onChange={e => handleChange(e)} onKeyDown={(event) => event.preventDefault()} autoComplete="off"/>
          <label>No. of Attending ({form ? form.invitees : ''})</label>
        </div>
        <div class="user-box">
          <div className="radioButtonWrapper">
            <div className="radioButtonChoice">
              <input type="radio" value="true" id="radioChoiceYes" name="isGoing" checked={form.isGoing === 'true'} onChange={e => handleChange(e)}/>
              <label htmlFor="radioChoiceYes">Going</label>
            </div>
            <div className="radioButtonChoice">
              <input type="radio" value="false" id="radioChoiceNo" name="isGoing" checked={form.isGoing === 'false'} onChange={e => handleChange(e)}/>
              <label htmlFor="radioChoiceNo">Not Going</label>
            </div>
          </div>
          <label>Response</label>
        </div>
        <button type="button" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        </>
        )}
      </form>
    </div>
  );
}

export default InputForm;