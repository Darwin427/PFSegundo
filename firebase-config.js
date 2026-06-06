import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAFOGvdCh-F8C4ByB5-tuAw0Khs7fhfEZc",
  authDomain: "proyectoformativogradose-91146.firebaseapp.com",
  projectId: "proyectoformativogradose-91146",
  storageBucket: "proyectoformativogradose-91146.firebasestorage.app",
  messagingSenderId: "637331777737",
  appId: "1:637331777737:web:bf93b5d2b099ba7033c518",
  measurementId: "G-3XT80MXK96"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
