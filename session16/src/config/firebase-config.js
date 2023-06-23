// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJQpie4lvcS6M3ktxah7Q79G3-kXOcLM",
  authDomain: "shop-app-jv230306-jv230215.firebaseapp.com",
  projectId: "shop-app-jv230306-jv230215",
  storageBucket: "shop-app-jv230306-jv230215.appspot.com",
  messagingSenderId: "393766593013",
  appId: "1:393766593013:web:844fd307c02821c32b80bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);