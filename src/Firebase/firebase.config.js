// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk6YjjWZfNSLXPBmsSl_KWbp_B7n8S94A",
  authDomain: "mohamilon-57e2d.firebaseapp.com",
  projectId: "mohamilon-57e2d",
  storageBucket: "mohamilon-57e2d.firebasestorage.app",
  messagingSenderId: "697774957688",
  appId: "1:697774957688:web:2bb466bfa2567e7d45b98d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);