// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};



// const firebaseConfig = {
//   apiKey: "AIzaSyCOaZ1SbFKmG8AQ5MTHoAeD2cu_Qm5QKn8",
//   authDomain: "react-blog-website-c254b.firebaseapp.com",
//   projectId: "react-blog-website-c254b",
//   storageBucket: "react-blog-website-c254b.appspot.com",
//   messagingSenderId: "837965185515",
//   appId: "1:837965185515:web:5d24afdb7ee9edb381d9ae",
//   measurementId: "G-C1J165HVGE",
//   databaseURL : "https://react-blog-website-c254b-default-rtdb.firebaseio.com"

// };

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };