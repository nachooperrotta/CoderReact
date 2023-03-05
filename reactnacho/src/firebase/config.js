
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAXl68haKzB-PF9Em5tORv6AXE2Homf_A",
  authDomain: "ottayerbas.firebaseapp.com",
  projectId: "ottayerbas",
  storageBucket: "ottayerbas.appspot.com",
  messagingSenderId: "935171161214",
  appId: "1:935171161214:web:fbb3418d169d934557ac2f"
};


const app = initializeApp(firebaseConfig)

export const InitFirestore = () => {
    return app
}