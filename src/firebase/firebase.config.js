// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBYDcxzi2IKFIhk7sXkgRCZMUXtLP0liKU",
  authDomain: "car-doctor-263c6.firebaseapp.com",
  projectId: "car-doctor-263c6",
  storageBucket: "car-doctor-263c6.appspot.com",
  messagingSenderId: "580836274778",
  appId: "1:580836274778:web:d96044fbe13bead4e75e63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app