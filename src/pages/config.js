// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBs-dT-QTG9Wg_t4QJgAPF0ohVdujH6nSs",
  authDomain: "clothes-store-ccba1.firebaseapp.com",
  projectId: "clothes-store-ccba1",
  storageBucket: "clothes-store-ccba1.appspot.com",
  messagingSenderId: "534491698930",
  appId: "1:534491698930:web:ba187e7d08f146c0a5a26b"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};