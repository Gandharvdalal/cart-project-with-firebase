import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBgAwoAXwn06YjXR3RKTHppDK68D4_PVWo",
  authDomain: "cart-930c3.firebaseapp.com",
  projectId: "cart-930c3",
  storageBucket: "cart-930c3.appspot.com",
  messagingSenderId: "595244016571",
  appId: "1:595244016571:web:0d5170ae275f739db85a9e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

