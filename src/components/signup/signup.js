import React from 'react';
import './signup.scss';

function Signup() {
  return(
    <div className="signup">
      <div className="signup-inner">
        <div className="signup-headline">Join Samantha!</div>
        <div className="signup-text">Sign up to receive the latest campaign updates.</div>
        <div className="signup-form">
          <form className="forms-email" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfteSQKGDYkHA2g0ZneSFqGqTLxc4QONLtk_MCIiekvXi8cpg/formResponse" target="_self" method="POST">
            <input className="email-address" type="email" name="entry.508402416" placeholder="Email" required />
            <input className="zipcode" type="text" pattern="[0-9]{5}" title="Five digit zip code" size="5" name="entry.56774094" placeholder="ZIP" required />
            <input className="submit" type="submit" value="Join >" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup