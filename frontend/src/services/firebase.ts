import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3nLsUIULrrdc4gE0egkBg3-RAN8qxgac",
  authDomain: "trisog-3db22.firebaseapp.com",
  projectId: "trisog-3db22",
  storageBucket: "trisog-3db22.appspot.com",
  messagingSenderId: "143928435603",
  appId: "1:143928435603:web:50288b57ad2e1bc65c7e66"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);