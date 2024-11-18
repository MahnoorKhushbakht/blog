import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt-0gijiFRJl1mtsfQ_LeXAjOzsf7bF1o",
  authDomain: "blog-website-66e03.firebaseapp.com",
  projectId: "blog-website-66e03",
  storageBucket: "blog-website-66e03.appspot.com",
  messagingSenderId: "734745233252",
  appId: "1:734745233252:web:3efe7e371dd5d86c11dc71",
  measurementId: "G-RY0FRNDXG5"
};

// Check if Firebase is already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  console.log("Firebase Initialized");
} else {
  app = getApps()[0]; // Use the already initialized app
  console.log("Firebase Already Initialized");
}

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
