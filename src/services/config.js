import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbQB6tIycvnP3FxHJ5cmaKeSvXCSo6yj0",
    authDomain: "ecommerce-2a776.firebaseapp.com",
    projectId: "ecommerce-2a776",
    storageBucket: "ecommerce-2a776.appspot.com",
    messagingSenderId: "199996104829",
    appId: "1:199996104829:web:ef126a0bfab7d976d11114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)