"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";



function TopBar() {


  return (
    <div className="d-none d-md-block top-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="top-bar-left">
              <div className="text">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <p>+123 456 7890</p>
              </div>
              <div className="text">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="top-bar-right">
              <div className="social">
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar