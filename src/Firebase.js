import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD6Sor6efTddgj97ZqEFjOPrrsw7lixe10",
  authDomain: "openinapp-873be.firebaseapp.com",
  projectId: "openinapp-873be",
  storageBucket: "openinapp-873be.appspot.com",
  messagingSenderId: "541521286376",
  appId: "1:541521286376:web:f730a6257a257e2c9de55d",
  measurementId: "G-7JL8K47124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
