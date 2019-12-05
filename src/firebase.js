import firebase from "firebase/app";
import "firebase/database";
import config from "./config/firebaseConfig";

// Initialize Firebase
firebase.initializeApp(config);

export const db = firebase.database();
