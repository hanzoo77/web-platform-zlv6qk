import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: 'AIzaSyB13FeyAbo1mQRycNTTegc8trqFsOUy2sA',
  authDomain: 'web-firebase-login-1a0ea.firebaseapp.com',
  projectId: 'web-firebase-login-1a0ea',
  storageBucket: 'web-firebase-login-1a0ea.appspot.com',
  messagingSenderId: '257911531426',
  appId: '1:257911531426:web:b6455b1bc96bbed74ab4fb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth;

function signUp() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.massage));
  alert('Signed In');
}