// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAnf5i_NcpN08Oei60DOD2gu0PB17Kpp98",
  authDomain: "hotel-app-ef2e3.firebaseapp.com",
  projectId: "hotel-app-ef2e3",
  storageBucket: "hotel-app-ef2e3.appspot.com",
  messagingSenderId: "976236562297",
  appId: "1:976236562297:web:3e37f89912ba535a8d51a8",
  measurementId: "G-1FTQCY5HNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};