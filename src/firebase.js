// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Uncomment if you need Analytics
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHI0vr61R_3FXnfp2fMbSH7oKJqKDzZkk",
  authDomain: "joeoutside-7800a.firebaseapp.com",
  projectId: "joeoutside-7800a",
  storageBucket: "joeoutside-7800a.firebasestorage.app",
  messagingSenderId: "96064565427",
  appId: "1:96064565427:web:70f9697d4defc7c4a180c6",
  measurementId: "G-226GBM8C8S" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Uncomment if you need Analytics

// Export the initialized app (and other services as needed)
export { app }; 