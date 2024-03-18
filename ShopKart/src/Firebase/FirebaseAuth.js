
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyALeP0cYEIFM-8r9j0l3N5wzTy3wvKAoso",
  authDomain: "shopkart-a7e53.firebaseapp.com",
  projectId: "shopkart-a7e53",
  storageBucket: "shopkart-a7e53.appspot.com",
  messagingSenderId: "92412803119",
  appId: "1:92412803119:web:f1c1c070eb0f249133aeda",
  measurementId: "G-90Z72DPGXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app);


export{app,auth,db}
