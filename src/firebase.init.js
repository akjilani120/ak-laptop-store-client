
import { initializeApp, getAuth } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain:`${process.env.AUTH_DOMAIN}` ,
  projectId: `${process.env.PROJECT_ID}`,
  storageBucket: `${process.env.STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.MESSAGING_SENDERID}`,
  appId: `${process.env.APP_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default  auth;