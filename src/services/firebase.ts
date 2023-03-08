// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  // Paste your firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(`Firebase app initialized: ${app.name}`);
export const database = getDatabase(app);
