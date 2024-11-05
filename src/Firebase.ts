
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import {getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyC-7-CGYo69g0TeEl8oCBdt_7L2341dQd0",
//   authDomain: "olx-react-8025d.firebaseapp.com",
//   projectId: "olx-react-8025d",
//   storageBucket: "olx-react-8025d.appspot.com",
//   messagingSenderId: "923778242906",
//   appId: "1:923778242906:web:cefc33e9001b76d1117b63",
//   measurementId: "G-9HJLQFY9G9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUAOEFgbWyFJK_sPyW8VnV4Yn0F6t13Ys",
  authDomain: "olx-clone-react-9e8d2.firebaseapp.com",
  projectId: "olx-clone-react-9e8d2",
  storageBucket: "olx-clone-react-9e8d2.firebasestorage.app",
  messagingSenderId: "195713645915",
  appId: "1:195713645915:web:2e34f63f1370d8274f2e7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)