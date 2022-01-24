import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbtPqOIDHGbOIQ2TCgWliMEhaQ9nvgRP8",
  authDomain: "idsevalblog.firebaseapp.com",
  databaseURL:
    "https://idsevalblog-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "idsevalblog",
  storageBucket: "idsevalblog.appspot.com",
  messagingSenderId: "1079694165533",
  appId: "1:1079694165533:web:6580627d9a9e61ce4d68f4",
  measurementId: "G-3X1DFXZ2ED",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
