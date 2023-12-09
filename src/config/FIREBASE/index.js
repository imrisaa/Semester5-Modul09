import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDDvjEDII70XSapfXPSpGb3iWO5obkeANg",
    authDomain: "notesapp-bcdbb.firebaseapp.com",
    databaseURL: "https://notesapp-bcdbb-default-rtdb.firebaseio.com",
    projectId: "notesapp-bcdbb",
    storageBucket: "notesapp-bcdbb.appspot.com",
    messagingSenderId: "385712116876",
    appId: "1:385712116876:web:43603144c5aaa40cea17a9",
    measurementId: "G-SD0PDGJPFE"
});

const FIREBASE = firebase;

export default FIREBASE;