// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyCMjCta2yLQpILwtLXYCghHkFtGOHz_vKY",
  authDomain: "portfolio-d0788.firebaseapp.com",
  projectId: "portfolio-d0788",
  storageBucket: "portfolio-d0788.appspot.com",
  messagingSenderId: "389206535662",
  appId: "1:389206535662:web:fce1a261c0c51ba95932ff",
  measurementId: "G-T3RRKZC7YR"
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