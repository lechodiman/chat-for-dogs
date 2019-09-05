import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyBtum51srsX4BZVhzsiwyZj0yXBEMe2W8E",
  authDomain: "chat-for-dogs.firebaseapp.com",
  databaseURL: "https://chat-for-dogs.firebaseio.com",
  projectId: "chat-for-dogs",
  storageBucket: "",
  messagingSenderId: "625853169616",
  appId: "1:625853169616:web:3448447c858ece74"
};

// Initialize Firebase
firebase.initializeApp(config);

export const db = firebase.database();
