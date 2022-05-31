
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCN8QuGGU1Z-sDxjy29QffHxu50vAGXRAs',
  authDomain:'ak-laptop-store-main.firebaseapp.com' ,
  projectId: 'ak-laptop-store-main',
  storageBucket: 'ak-laptop-store-main.appspot.com',
  messagingSenderId: '768563422629',
  appId: '1:768563422629:web:d26f26394e4ee0a3a2f44c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;