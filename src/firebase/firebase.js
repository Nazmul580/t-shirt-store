
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// const firebaseConfig = {
//     apiKey: "AIzaSyBOpLAlFXONij6oM0gFUa6c1Y2BAw2Dzhs",
//     authDomain: "t-shirt-store-8ea36.firebaseapp.com",
//     projectId: "t-shirt-store-8ea36",
//     storageBucket: "t-shirt-store-8ea36.firebasestorage.app",
//     messagingSenderId: "795825305505",
//     appId: "1:795825305505:web:4f02e49661f8ed98ebfde0"
// };

const firebaseConfig = {
    apiKey: "AIzaSyBOpLAlFXONij6oM0gFUa6c1Y2BAw2Dzhs",
    authDomain: "t-shirt-store-8ea36.firebaseapp.com",
    projectId: "t-shirt-store-8ea36",
    storageBucket: "t-shirt-store-8ea36.firebasestorage.app",
    messagingSenderId: "795825305505",
    appId: "1:795825305505:web:4f02e49661f8ed98ebfde0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const fireDB = getFirestore(app);

export { auth, fireDB };