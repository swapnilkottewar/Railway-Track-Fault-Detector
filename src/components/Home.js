// File: src/components/Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home1.css";

const Home = () => {
  const images = [
    "/images/train1.jpg",
    "/images/train2.jpg",
    "/images/train3.jpg",
    "/images/train4.jpg",
    "/images/train5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container1">
        <div className="container1-box1">
          <img src="/images/engine logo 3.png" alt="train logo" />
          <a className="c1-b1-a" href="#home">Home</a>
          <Link to="/about">About</Link>
          <a className="c1-b1-a" href="#contact">Contact</a>
          <Link className="c1-b1-a" to="/help">Help</Link>
          <div className="container1-buttons">
          <a href="/login" className="btn-outline">Login</a>
          &nbsp; &nbsp;
            <a href="/login" className="btn btn-success">Sign Up</a>
          </div>
        </div>

        <div className="container1-hero">
          <div className="container1-box2">
            <h2>Railway Track Inspection System</h2>
            <p className="c1-b2-p">
              This model aimed at<br />
              enhancing operational efficiency. This model is designed<br />
              to analyze faulty tracks, enabling Railways to significantly<br />
              improve safety and reliability across its network.
            </p>
          </div>
          <div className="container1-box3">
            <div className="slider">
              <img src={images[index]} alt="Train Slider" />
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <h1>How It Works</h1>
      </div>

      <div className="container3">
        {/* 3 Info Boxes */}
        <div className="container3-box">
          <i className="fa-solid fa-upload"></i>
          <h3 className="c3-h">Upload Image</h3>
          <p className="c3-p">
            First Upload clear Image of faulty and Non faulty rail tracks in our software
          </p>
        </div>
        <div className="container3-box">
          <i className="fa-solid fa-hexagon-nodes"></i>
          <h3 className="c3-h">Image Analyze</h3>
          <p className="c3-p">Our AI Agent analyzes the image</p>
        </div>
        <div className="container3-box">
          <i className="fa-solid fa-square-poll-vertical"></i>
          <h3 className="c3-h">Get Result</h3>
          <p className="c3-p">AI Agent gives a Result Based on your input image</p>
        </div>
      </div>

      <div className="container4">
        <h1>Software Features</h1>
      </div>

      <div className="container5">
        {/* Features */}
        <div className="container5-box">
          <i className="fa-solid fa-meteor"></i>
          <h3 className="c5-h">Faster Defect Analysis</h3>
          <p className="c5-p">
            Our Model Fastly Identify the faulty track with the help of images.
          </p>
        </div>
        <div className="container5-box">
          <i className="fa-solid fa-shield"></i>
          <h3 className="c5-h">Increase Safety</h3>
          <p className="c5-p">
            With the help of this model, identify faulty tracks in seconds and improve railway safety.
          </p>
        </div>
        <div className="container5-box">
          <i className="fa-solid fa-user-tie"></i>
          <h3 className="c5-h">User Friendly</h3>
          <p className="c5-p">
            This software is easy to use. No extra knowledge required.
          </p>
        </div>
        <div className="container5-box">
          <i className="fa-solid fa-circle-check"></i>
          <h3 className="c5-h">Increase Accuracy</h3>
          <p className="c5-p">
            Detect faulty tracks without mistakes, increasing overall accuracy.
          </p>
        </div>
      </div>

      <div className="container6">
        <h2>
          Our Software is used to detect faulty tracks. You can also explore our model in detail.
        </h2>
        <p>You can explore this software</p>
        <a href="/login">Learn More</a>
      </div>

      <div className="container7">
        <div className="container7-box">
          <h3>Know About Latest Updates</h3>
          <p>Enter Your Email and Get latest Updates</p>
        </div>
        <div className="container7-box">
          <label htmlFor="email">Enter Your Email</label><br />
          <input type="email" id="email" className="c7-input" />
        </div>
      </div>

      <div className="container8">
        <img src="/images/engine logo 3.png" alt="logo" />
        <div className="container8-box">
          <h3>Software</h3>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Help</h3>
        </div>
        <div className="container8-box2">
          <h3><a href="#features">Features</a></h3>
          <h3><a href="#faster-defect">Faster Defect Analysis</a></h3>
          <h3><a href="#safety">Increase Safety</a></h3>
          <h3><a href="#user-friendly">User Friendly</a></h3>
          <h3><a href="#accuracy">Increase Accuracy</a></h3>
        </div>
        <div className="container8-box4">
          <h3><a href="#follow">Follow Us</a></h3>
          <h3><a href="#instagram">Instagram</a></h3>
          <h3><a href="#facebook">Facebook</a></h3>
          <h3><a href="#linkedin">LinkedIn</a></h3>
          <h3><a href="#twitter">Twitter</a></h3>
        </div>
        <div className="container8-box6">
          <h3><a href="#support">Support</a></h3>
          <h3><a href="#faq">FAQ</a></h3>
          <h3><a href="#contact">Contact Us</a></h3>
          <h3><a href="#privacy">Privacy Policy</a></h3>
          <h3><a href="#terms">Terms of Service</a></h3>
        </div>
      </div>

      <div className="container8-box9">
        &copy;<p>Railway Track Inspection System 2025. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
