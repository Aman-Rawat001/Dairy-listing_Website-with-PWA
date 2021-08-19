import firebase from "firebase";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBf79BZSv_vY9okXfXJuBbf-mxXp59wsQw",
  authDomain: "dairy-need.firebaseapp.com",
  projectId: "dairy-need",
  storageBucket: "dairy-need.appspot.com",
  messagingSenderId: "459234925052",
  appId: "1:459234925052:web:97b95841f51c6ba155ba79",
  measurementId: "G-YZ9JZ8XKH5",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
const defaultAnalytics = firebase.analytics();
