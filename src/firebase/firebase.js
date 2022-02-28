// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMqPon7Zh2HO-cz6HwkKUG5NwZv7kNGc",
  authDomain: "mydisney-blackhat.firebaseapp.com",
  projectId: "mydisney-blackhat",
  storageBucket: "mydisney-blackhat.appspot.com",
  messagingSenderId: "555263956001",
  appId: "1:555263956001:web:53dcde7f4623fa49857f60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const firebaseApp = initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
// const auth = 
