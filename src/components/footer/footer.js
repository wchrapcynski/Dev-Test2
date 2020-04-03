import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo"></div>
      <div className="footer-address">555 Main Street, Austin, TX 98765</div>
      <div className="footer-text"><a href="#privacy">Privacy Policy</a> |  ©2016 Samantha Hall for Congress. All Rights Reserved.</div>
      <div className="footer-paidfor">Paid for by Samantha Hall for Congress.</div>
    </div>
  );
}

export default Footer;