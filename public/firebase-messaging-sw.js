importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAlqEEIJcpZKDMaSjjRNGKygCk185VsLKA",
  authDomain: "fir-app-6887b.firebaseapp.com",
  projectId: "fir-app-6887b",
  storageBucket: "fir-app-6887b.appspot.com",
  messagingSenderId: "360106724818",
  appId: "1:360106724818:web:aa519de908f4c05f864c0b",
  databaseURL: "lhttps://fir-app-6887b-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
