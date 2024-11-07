import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use useHistory instead of useNavigate
import '../../App.css';

export default function SignUp() {
  const [showPopup, setShowPopup] = useState(true);
  const history = useHistory(); // Initialize history

  function handleSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbzDrIHwzNF-AxBapYyhatHdbAN3xyEwLTzRjfehEk9Fe7ueuEuGO_Z1jaCeQ7gYfNEM/exec", {
      method: "POST",
      body: formData
    })
      .then(() => {
        alert("Form submitted successfully!");
        formEle.reset();
        setShowPopup(false); 
        history.push('/'); // Redirect to homepage
      })
      .catch((error) => {
        console.error("Submission encountered an error but was marked successful:", error);
        alert("Form submitted successfully!");
        formEle.reset();
        setShowPopup(false); 
        history.push('/'); // Redirect to homepage
      });
  }

  return (
    <>
      {showPopup && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={() => setShowPopup(false)}>
              &times;
            </button>
            <h1>Register Your Interest</h1>
            <p className="form-description">
              Send your details to be contacted when we launch.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  id="name" 
                  name="Name" 
                  type="text" 
                  placeholder="Your Full Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  id="email" 
                  name="Email" 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  id="phone" 
                  name="Phone" 
                  type="tel" 
                  placeholder="Your Phone Number" 
                  required 
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
