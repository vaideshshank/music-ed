import React from 'react';
import '../../stylesheets/Signup/Signup.css';
import ThemeImage from '../../assets/images/disk.png';

export default function Signup() {
  return (
    <div className="signup">
      <div className="signupTitle">Your favourite music artists much close now…</div>
      <div>
      <div className="signupForm">
              <span>Register</span>
              <form>
                  Email <span>*</span><br/>
                  <input type="email"/><br/>
                  Password <span>*</span><br/>
                  <input type="password"/><br/>
                  <input type="checkbox"/> Remember me on this computer <br/>
                  <button>Sign up</button>
              </form>
        </div> 
        <img src={ThemeImage}/>
      </div>
    </div>
  )
}
