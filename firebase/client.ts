import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqp4YoPBa-VH7B2NN79WyjNxqeEN8nNCk",
  authDomain: "prepwizecall.firebaseapp.com",
  projectId: "prepwizecall",
  storageBucket: "prepwizecall.firebasestorage.app",
  messagingSenderId: "295723452725",
  appId: "1:295723452725:web:901074dae1e0bd4935247c",
  measurementId: "G-YNZGFBF8HE"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);