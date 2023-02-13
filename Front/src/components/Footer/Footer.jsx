import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col  d-flex align-items-center justify-content-center">
            <img
              className="footer-brand me-5"
              src="./img/logo.png"
              alt="imagen logo"
            />
            <i className="fa-3x footer-icon me-4">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
            <i className="fa-3x footer-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </div>
          {/* <div className="col footer-icon"></div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
