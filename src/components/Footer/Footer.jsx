import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className='footer-title'>About</h3>
            <ul>
              <li><a className='footer-column__link' href="#">About Us</a></li>
              <li><a className='footer-column__link' href="#">Careers</a></li>
              <li><a className='footer-column__link' href="#">Press</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className='footer-title'>Support</h3>
            <ul>
              <li><a className='footer-column__link' href="#">Contact</a></li>
              <li><a className='footer-column__link' href="#">FAQ</a></li>
              <li><a className='footer-column__link' href="#">Shipping</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className='footer-title'>Legal</h3>
            <ul>
              <li><a className='footer-column__link' href="#">Privacy Policy</a></li>
              <li><a className='footer-column__link' href="#">Terms of Service</a></li>
              <li><a className='footer-column__link' href="#">Returns</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className='footer-title'>Newsletter</h3>
            <ul>
              <li><a className='footer-column__link' href="#">Subscribe for exclusive deals</a></li>
            </ul>
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 TechStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;