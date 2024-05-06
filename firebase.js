// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgc2vzRGyzJQcc11q0WHipVuKoXgdYvY",
  authDomain: "gamerscity-15cd9.firebaseapp.com",
  projectId: "gamerscity-15cd9",
  storageBucket: "gamerscity-15cd9.appspot.com",
  messagingSenderId: "1027623048027",
  appId: "1:1027623048027:web:b9dd8e07519c7c0599807e",
  measurementId: "G-T9HJBBHZCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);