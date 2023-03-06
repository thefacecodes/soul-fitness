import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDkh6XQ-p_7HFLLibPMVZYs-xMw7gYhAVA",
  authDomain: "soulfitnessapp.firebaseapp.com",
  //   databaseURL: "https://soulfitnessapp.firebaseio.com",
  projectId: "soulfitnessapp",
  storageBucket: "soulfitnessapp.appspot.com",
  messagingSenderId: "56369505139",
  appId: "1:56369505139:web:fb8c944b3fdfa00d37db06",
  measurementId: "G-D9NGNXH318",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
