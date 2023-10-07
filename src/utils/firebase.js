import { getAuth,  } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm15rzSU5jx59dWAd2TTV4YJsHiFIApHM",
  authDomain: "netflix-clone-91718.firebaseapp.com",
  projectId: "netflix-clone-91718",
  storageBucket: "netflix-clone-91718.appspot.com",
  messagingSenderId: "595690274157",
  appId: "1:595690274157:web:bb081f9892e65cfbdfee64",
  measurementId: "G-GWT5C3H4B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();