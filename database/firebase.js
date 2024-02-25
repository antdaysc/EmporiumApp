
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
require("firebase/database");
require("firebase/firestore");

const Config = {
  // Al desplegar una instancia/proeycto en firebase  poner aquí las credenciales
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
