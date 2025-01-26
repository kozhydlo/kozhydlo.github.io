import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCAoQyj5FwY15s_qtr_6-ufV9jTYqII_ns",

  authDomain: "myportfolio-70018.firebaseapp.com",

  projectId: "myportfolio-70018",

  storageBucket: "myportfolio-70018.firebasestorage.app",

  messagingSenderId: "668808735782",

  appId: "1:668808735782:web:8acef47713b7709abc8ae7",

  measurementId: "G-S2YVX8K0MK"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
