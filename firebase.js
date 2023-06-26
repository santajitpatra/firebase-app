import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyAlqEEIJcpZKDMaSjjRNGKygCk185VsLKA",
  authDomain: "fir-app-6887b.firebaseapp.com",
  projectId: "fir-app-6887b",
  storageBucket: "fir-app-6887b.appspot.com",
  messagingSenderId: "360106724818",
  appId: "1:360106724818:web:aa519de908f4c05f864c0b",
  databaseURL: "lhttps://fir-app-6887b-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
