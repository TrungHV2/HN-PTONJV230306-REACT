import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ-ARtTwPlaPsltCkCOqwiQ7ldMHsr4Sc",
    authDomain: "fir-upload-c3df3.firebaseapp.com",
    projectId: "fir-upload-c3df3",
    storageBucket: "fir-upload-c3df3.appspot.com",
    messagingSenderId: "406324134898",
    appId: "1:406324134898:web:c40abac9469c9c5c2f616b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;