import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhEnyBcD8Dh9hMGyFJCGV70m6-qmof894",
  authDomain: "facebook-2-d2522.firebaseapp.com",
  projectId: "facebook-2-d2522",
  storageBucket: "facebook-2-d2522.appspot.com",
  messagingSenderId: "339278095155",
  appId: "1:339278095155:web:91d5bdce493bcdf3899446",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
