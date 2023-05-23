// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJL8hEPPmYyz2EUXlvVO2tszk_P9VY5P0",
  authDomain: "firestock-9afdf.firebaseapp.com",
  projectId: "firestock-9afdf",
  storageBucket: "firestock-9afdf.appspot.com",
  messagingSenderId: "109732487738",
  appId: "1:109732487738:web:cc59ccd39b9a4e67d70b03"
};

// Initialize Firebase
const app = (initializeApp(firebaseConfig));

export const db = getFirestore(app);

export default app; 