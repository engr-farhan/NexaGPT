// Import the functions you need from the SDKs you need


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2xpDIFsnywm_pmzQQNb6cYi8donTMiBQ",
  authDomain: "unified-access.firebaseapp.com",
  databaseURL: "https://unified-access.firebaseio.com",
  projectId: "unified-access",
  storageBucket: "unified-access.appspot.com",
  messagingSenderId: "444705367734",
  appId: "1:444705367734:web:133ddac73fc1a23231e817",
  measurementId: "G-5K4DLPJSWD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(firebaseApp);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };


