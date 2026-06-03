// File: About.js
import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div>
      <div className="about-container1">
        <h3><b>About</b></h3>
        <p>Railway track Inspection System</p>
      </div>
      <div className="about-container2">
        <p>
          Computer vision is a technology that allows computers to "see" and understand images or videos, kind of like how our eyes and brain work together.
        </p>
        <p>
          In a Railway Tracking Inspection System, computer vision is used to:
        </p>
      </div>
      <div className="about-container3">
        <div className="about-container4">
          <div className="font">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <br />
          <h1><b>What it does:</b></h1>
        </div>
        <div className="about-container5">
          <div className="about-container5-box">
            Check the railway tracks by analyzing photos or videos taken by cameras (mounted on trains or drones).
          </div>
          <div className="about-container5-box">
            Find problems like cracks, broken parts, loose bolts, or anything out of place.
          </div>
          <div className="about-container5-box">
            Monitor the condition of the tracks over time to prevent accidents.
          </div>
        </div>
      </div>
      <div className="about-container6">
        <i className="fa-solid fa-cloud"></i>
        <br /><br />
        <h2><b>Vision</b></h2>
        <p>
          "To make railway track inspections smarter, faster, and safer by using cameras and computers that can automatically find problems on the tracks—so that<br/> accidents can be prevented, and trains can run smoothly."
        </p>
        <br />
        <i className="fa-solid fa-lightbulb"></i>
        <br /><br />
        <h2><b>The Big Idea</b></h2>
        <p>
          Instead of depending only on human eyes and manual checks, the goal is to let machines "see" and inspect the tracks using smart technology. This saves time, improves safety, and keeps train services running without delays.
        </p>
      </div>
      <div className="about-container7">
        <div className="about-container7-box">
          <h2><b>Mission</b></h2>
          <ul>
            <li>Automatically detect defects on railway tracks (like cracks, wear, or missing bolts).</li>
            <li>Save time by reducing the need for manual inspections.</li>
            <li>Improve safety for workers and passengers by spotting issues early.</li>
            <li>Keep trains running smoothly with fewer delays or breakdowns.</li>
            <li>Provide accurate data for maintenance planning and decision-making.</li>
            <li>Use modern technology (like AI and machine learning) to modernize railway inspections.</li>
            <li>Reduce costs by preventing major damage through early detection.</li>
          </ul>
        </div>
      </div>
      <div className="about-container8">
        <div className="about-container8-box">
          <h2><b>Technology Behind Computer Vision in Railway Tracking Inspection System (Using VGG16 Model)</b></h2>
          <b>1. Image Dataset</b>
          <ul>
            <li>The system uses pre-collected railway track images (possibly from official sources, drones, or earlier inspections).</li>
            <li>These images include examples of normal tracks and defective tracks</li>
          </ul>
          <b>2. Deep Learning with VGG16</b>
          <ul>
            <li>VGG16 is a pre-trained deep learning model used for image classification.</li>
            <li>It has 16 layers and is good at extracting features from images.</li>
            <li>In your system, VGG16 is used to analyze the track images and classify them as:</li>
            <li>✅ Normal (no damage)</li>
            <li>❌ Defective (cracks, gaps, etc.)</li>
          </ul>
          <b>3. Model Training & Fine-Tuning</b>
          <ul>
            <li>The VGG16 model is either used as-is or fine-tuned using your own dataset.</li>
            <li>It learns to recognize different types of defects based on labeled training data.</li>
          </ul>
          <b>4. Prediction & Detection</b>
          <ul>
            <li>Processes the image (resizing, normalizing, etc.)</li>
            <li>Uses its deep layers to extract features</li>
            <li>Classifies the image (e.g., "cracked", "intact", etc.)</li>
          </ul>
          <b>5. Output & Reporting</b>
          <ul>
            <li>The system gives results in a user-friendly format, such as:</li>
            <li>Labels or categories (Normal / Defective)</li>
            <li>Accuracy or confidence scores</li>
          </ul>
          <b>6. User Interface</b>
          <ul>
            <li>We make Our UI With The help of HTML and CSS and also use CSS Framework(Bootstrap)</li>
          </ul>
        </div>
      </div>
      <h1 className="about-heading"><b>Our Team</b></h1>
      <div className="about-container9">
        <div className="about-container9-box">
          <img src="/image1.jpg" alt="img" className="about-image" />
          <h4><b>Ansh Agraekar</b></h4>
          <p>St.Vincent Pallotti college Of Engineering and Teachnology </p>
          <p><b>Dept :</b>Artificial Intelligence</p>
          <p>UID:22010033</p>
        </div>
        <div className="about-container9-box">
          <img src="/image2.jpg" alt="img" className="about-image" />
          <h4><b>Mrunal Kanpillewar</b></h4>
          <p>St.Vincent Pallotti college Of Engineering and Teachnology </p>
          <p><b>Dept :</b>Artificial Intelligence</p>
          <p>UID:22010011</p>
        </div>
        <div className="about-container9-box">
          <img src="/image3.jpg" alt="img" className="about-image" />
          <h4><b>Mayank Kumbhare</b></h4>
          <p>St.Vincent Pallotti college Of Engineering and Teachnology </p>
          <p><b>Dept :</b>Artificial Intelligence</p>
          <p>UID:22010038</p>
        </div>
        <div className="about-container9-box">
          <img src="/image4.jpg" alt="img" className="about-image" />
          <h4><b>Swapnil Kottewar</b></h4>
          <p>St.Vincent Pallotti college Of Engineering and Teachnology </p>
          <p><b>Dept :</b>Artificial Intelligence</p>
          <p>UID:23110001</p>
        </div>
      </div>
    </div>
  );
};

export default About;
