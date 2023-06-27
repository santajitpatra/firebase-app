import {  messaging } from "../firebase";
import { useEffect } from "react";
import {  getToken } from "firebase/messaging";
import Lesson from "./pages/Lesson";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";


export default function App() {

   async function  requestPermission() {
   const permission = Notification.requestPermission()
      if (permission === "granted") {
        const token = await getToken(messaging, {
          vapidKey:
            "BGuP8PLwxcrbHZYQ6278fJ-E1AzXZoYeiYhyu38NU11srZK05OCMzh-hLFq465_efWSka4kYkrffFpMNAR6dZrw",
        });
        console.log("Token:", token);
      } else if (permission === "denied") {
        alert("Notification permission denied.");
      }
  }

  useEffect(() => {
    requestPermission();
  }, []);

    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    );


}
