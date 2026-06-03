// File: src/components/Detector.js
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Detector() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:3001/predict/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Error connecting to the server. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "5vw",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
   <div style={{ position: "absolute", top: "20px", right: "30px" }}>
     <Link
     to="/"
     style={{
      color: "white",
      textDecoration: "none",
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: "10px 20px",
      borderRadius: "30px",
      border: "1px solid white",
      fontWeight: "bold"
     }}
    >
       🏠 Home
     </Link>
   </div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        🚂 Railway Track Fault Detector
      </motion.h1>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: "8px",
            border: "none",
            fontSize: "1rem",
            backgroundColor: "#fff",
            color: "#333",
          }}
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.8rem",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#00b894",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          {loading ? "Analyzing..." : "Upload and Predict"}
        </button>
      </motion.div>

      {selectedFile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "2rem",
            textAlign: "center",
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>📷 Preview:</h3>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Preview"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          />
        </motion.div>
      )}

      {result && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: "500px",
            backgroundColor:
              result.status?.includes("Fault") ? "#d63031" : "#00b894",
            padding: "1.5rem",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            🔍 Prediction Result
          </h2>
          <p>✅ Safe Probability: {result?.safe_probability?.toFixed(4) ?? "N/A"}</p>
          <p>⚠️ Faulty Probability: {result?.faulty_probability?.toFixed(4) ?? "N/A"}</p>
          <h3 style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{result.status}</h3>
        </motion.div>
      )}
    </div>
  );
}

export default Detector;
