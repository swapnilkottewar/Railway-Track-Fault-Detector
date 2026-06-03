# 🚂 Railway Track Fault Detector Using Deep Learning

## 📌 Project Overview

The Railway Track Fault Detector is an AI-powered railway inspection system that automatically detects faults in railway tracks using Deep Learning and Computer Vision techniques. The system analyzes uploaded track images and classifies them as either **Safe** or **Faulty**, helping improve railway safety and reducing manual inspection efforts.

This project uses a fine-tuned **VGG16 Convolutional Neural Network (CNN)** model for image classification and provides a user-friendly web interface for fault detection.

---

## 🎯 Problem Statement

Manual railway track inspection is time-consuming, costly, and prone to human error. Undetected cracks or faults can lead to serious railway accidents and operational disruptions.

The objective of this project is to develop an intelligent system that can automatically analyze railway track images and identify faults with high accuracy using Deep Learning techniques.

---

## ✨ Features

* Upload railway track images
* AI-based fault detection using VGG16
* Real-time prediction results
* Displays Safe and Faulty probabilities
* User-friendly React interface
* FastAPI backend integration
* Responsive web design
* Railway safety enhancement

---

## 🏗️ System Architecture

```text
User Uploads Image
        │
        ▼
 React Frontend
        │
        ▼
 FastAPI Backend
        │
        ▼
 Image Preprocessing
(Resize, Normalize)
        │
        ▼
 VGG16 Deep Learning Model
        │
        ▼
 Prediction
(Safe / Faulty)
        │
        ▼
 Result Display
```

---

## 🧠 Deep Learning Model

### Model Used

* VGG16 (Transfer Learning)

### Why VGG16?

* Excellent image feature extraction
* High classification accuracy
* Pre-trained on ImageNet
* Suitable for railway track image analysis

### Image Processing Steps

1. Image Upload
2. Image Resizing (224 × 224)
3. Normalization
4. Feature Extraction using VGG16
5. Classification
6. Result Generation

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router
* CSS
* Framer Motion
* Font Awesome

### Backend

* FastAPI
* Python
* TensorFlow
* NumPy
* Pillow

### Machine Learning

* Deep Learning
* Convolutional Neural Networks (CNN)
* Transfer Learning
* VGG16

---

## 📂 Project Structure

```text
Railway-Track-Fault-Detector/
│
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   └── App.js
│
├── server/
│   ├── main.py
│   ├── model/
│   └── test_model_loading.py
│
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/swapnilkottewar/Railway-Track-Fault-Detector.git
cd Railway-Track-Fault-Detector
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
pip install fastapi uvicorn tensorflow numpy pillow python-multipart
```

### Run Backend

```bash
cd server
uvicorn main:app --host 127.0.0.1 --port 3001
```

### Run Frontend

```bash
npm start
```

---

## 📊 Model File

Due to GitHub file size limitations, the trained VGG16 model file is not included in this repository.

Download the model from:

Google Drive:
https://drive.google.com/drive/folders/1RJ0i39YyaXVbu4oZlbeINEvcaEJjcX-3

After downloading, place the model file inside:

```text
server/model/
```

Expected model file:

```text
railway_fault_detector_vgg16.h5
```

---

## 🚀 Future Enhancements

* Real-time video-based inspection
* Drone-based railway monitoring
* Fault localization on track images
* Severity level prediction
* Cloud deployment
* Maintenance recommendation system

---

## 👨‍💻 Team Members

* Ansh Agraekar
* Mrunal Kanpillewar
* Mayank Kumbhare
* Swapnil Kottewar

Department of Artificial Intelligence

St. Vincent Pallotti College of Engineering and Technology

---

## 📜 License

This project is developed for academic and educational purposes.

---

## 🤝 Contributions

Contributions, suggestions, and improvements are welcome.

---

### ⭐ If you found this project useful, please consider giving it a star on GitHub.
