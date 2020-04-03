import React from 'react';
import './signup.scss';

function Signup() {
  return(
    <div className="signup">
      <div className="signup-inner">
        <div className="signup-headline">Join Samantha!</div>
        <div className="signup-text">Sign up to receive the latest campaign updates.</div>
        <div className="signup-form">
          <form className="forms-email">
            <input className="email-address" type="email" name="email" placeholder="Email"/>
            <input className="zipcode" type="text" name="zipcode" placeholder="ZIP"/>
            <button className="submit">Join ></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup