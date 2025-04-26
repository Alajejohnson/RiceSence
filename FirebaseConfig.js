// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, initializeAuth } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFlfMXQJbzY0-IBH9jKmBXPJA1IU34bks",
  authDomain: "ricesense-a6959.firebaseapp.com",
  databaseURL: "https://ricesense-a6959-default-rtdb.firebaseio.com",
  projectId: "ricesense-a6959",
  storageBucket: "ricesense-a6959.firebasestorage.app",
  messagingSenderId: "896383699828",
  appId: "1:896383699828:web:ffac524a54a9b8289c7a21",
  measurementId: "G-M49FRGTQP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);
const auth = getAuth(app);
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

export { database, auth };