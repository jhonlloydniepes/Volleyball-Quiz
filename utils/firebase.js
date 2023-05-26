
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfvB6osYFlisdFIN4I7f7S10R7ysnWuXI",
  authDomain: "quiz-app-58366.firebaseapp.com",
  projectId: "quiz-app-58366",
  storageBucket: "quiz-app-58366.appspot.com",
  messagingSenderId: "364614629694",
  appId: "1:364614629694:web:74412064d4b04a26d9546f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();