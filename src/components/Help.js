// File: src/components/Help.js
import React from "react";
import "../styles/help.css";

const Help = () => {
  return (
    <div className="help-page">
      <div className="help-container1">
        <h1>We're Here to Help</h1>
      </div>

      <div className="help-container2">
        <p>
          Welcome to the Help Center for the Railway Tracking Inspection System. This platform uses advanced computer vision to detect track defects, monitor infrastructure, and ensure railway safety. Our Help page is designed to guide you on how to use the system, view reports, and keep railway travel safe and smooth.
        </p>
      </div>

      <div className="help-container3">
        <div className="help-container3-box1">
          <i className="fa-solid fa-envelope"></i><br />
          <h4 className="help-h4">Chat with us</h4>
          <p className="help-c3-p">Email: supportrailway@gmail.com</p>
        </div>
        <div className="help-container3-box2">
          <i className="fa-solid fa-phone"></i><br />
          <h4 className="help-h4">Phone</h4>
          <p className="help-c3-p">24/7 Support<br />Call: 1800 111 321</p>
        </div>
      </div>

      <div className="help-container4">
        <p>
          If you are facing problems like unclear images, improper system output, or slow performance, please use the above options to get assistance.
        </p>
      </div>

      <div className="help-container5">
        <p>If you're not sure how to use this system, click the button below for a tutorial.</p>
        <a href="/view" className="btn btn-danger">View</a>
      </div>
    </div>
  );
};

export default Help;
