import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMj3V75Tpus4EKseGm4l_E5Br8SvSK6Kg",
  authDomain: "nwitter-3c8eb.firebaseapp.com",
  projectId: "nwitter-3c8eb",
  storageBucket: "nwitter-3c8eb.appspot.com",
  messagingSenderId: "6036381740",
  appId: "1:6036381740:web:fcd424cfeab49addb0b189",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
