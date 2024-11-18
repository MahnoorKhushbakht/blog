import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain ,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket ,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
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
