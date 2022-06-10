
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
require("firebase/database");
require("firebase/firestore");

const Config = {
  apiKey: "AIzaSyDFQNgt47KV_LMnKJGe2UA0qYQrJCOr4ro",
  authDomain: "emporium-c8fc5.firebaseapp.com",
  projectId: "emporium-c8fc5",
  storageBucket: "emporium-c8fc5.appspot.com",
  databaseURL:'https://emporium-c8fc5-default-rtdb.firebaseio.com/',
  messagingSenderId: "105787822368",
  appId: "1:105787822368:web:bbce988a6d9a656e570745",
  measurementId: "G-4K7NGZB4TP"
};

// Initialize Firebase
function initFirebase(){
  if(!firebase.apps.length){
    firebase.initializeApp(Config)
  }
}

initFirebase();

const firedb = firebase.firestore()
const realdb = firebase.database()
export default {firebase,firedb,realdb};