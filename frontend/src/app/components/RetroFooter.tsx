import React from 'react';

const RetroFooter = () => {
  return (
    <footer className="retro-footer">
      <div className="footer-top">
        <div className="grid-lines"></div>
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="section-title">GRAN TURISMO 6</h3>
            <ul>
              <li><a href="#">Game Overview</a></li>
              <li><a href="#">Cars & Tracks</a></li>
              <li><a href="#">Game Manual</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="section-title">COMMUNITY</h3>
            <ul>
              <li><a href="#">GT Community</a></li>
              <li><a href="#">Seasonal Events</a></li>
              <li><a href="#">Leaderboards</a></li>
              <li><a href="#">Photo Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="section-title">SUPPORT</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="section-title">CONNECT</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">T</a>
              <a href="#" className="social-icon">Y</a>
              <a href="#" className="social-icon">I</a>
            </div>
            <div className="newsletter">
              <p>Subscribe for updates</p>
              <div className="newsletter-input">
                <input type="text" placeholder="YOUR EMAIL" />
                <button>GO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="checkerboard"></div>
        <div className="copyright">
          <p>© 2023 POLYPHONY DIGITAL · GRAN TURISMO®6 · ALL RIGHTS RESERVED</p>
          <p>PS3™</p>
        </div>
      </div>
    </footer>
  );
};

export default RetroFooter;