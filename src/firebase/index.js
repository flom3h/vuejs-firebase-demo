import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCzy-mqDeo_agddHlBSIJuX8sX_LGqbKhs",
  authDomain: "vuejs-f17eb.firebaseapp.com",
  projectId: "vuejs-f17eb",
  storageBucket: "vuejs-f17eb.appspot.com",
  messagingSenderId: "828379256246",
  appId: "1:828379256246:web:70e52708665ec95dbe1d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}