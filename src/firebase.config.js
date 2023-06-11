import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCqCz_EeSjsi2kYxEXYr8Gr4LWCxBcEkkU",
  authDomain: "web-ban-hang-90d7a.firebaseapp.com",
  projectId: "web-ban-hang-90d7a",
  storageBucket: "web-ban-hang-90d7a.appspot.com",
  messagingSenderId: "775322971397",
  appId: "1:775322971397:web:cf54332abbc6f64ac2db6c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;