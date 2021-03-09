import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDWrhWhomdIEkraT5YU3_cwMNrw_jOkIX8",
  authDomain: "helloworld2021-ba411.firebaseapp.com",
  databaseURL: "https://helloworld2021-ba411-default-rtdb.firebaseio.com",
  projectId: "helloworld2021-ba411",
  storageBucket: "helloworld2021-ba411.appspot.com",
  messagingSenderId: "864565047128",
  appId: "1:864565047128:web:dba6befd737b6e1b253f2d",
  measurementId: "G-49ERS2R75J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
