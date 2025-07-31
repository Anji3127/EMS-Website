import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// This is like a api key to communicate with firebase database
const firebaseConfig = {
    apiKey: "AIzaSyCi4VZZUUZH3lb1Vlc1Z1olZsj4785kLOA",
    authDomain: "employee-management-b3080.firebaseapp.com",
    projectId: "employee-management-b3080",
    storageBucket: "employee-management-b3080.appspot.com",
    messagingSenderId: "625148924791",
    appId: "1:625148924791:web:07c693fb514345b8268772",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//we are connecting our application to database
export const db = getFirestore(app);
