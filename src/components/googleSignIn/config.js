import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
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
