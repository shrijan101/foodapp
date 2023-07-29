import React from "react";
import { ListGroup } from "reactstrap";

import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
        <h5>FoodHub</h5>
        <p>FoodHub, the best hub in town.</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup>
          <div className="delivery__time-item border-0 ps-0">
            <span>Monday-Saturday:</span>
            <p>08:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Sunday:</span>
            <p>Off day</p>
          </div>
        </ListGroup>
      </div>
    </footer>
  );
};

export default Footer;
