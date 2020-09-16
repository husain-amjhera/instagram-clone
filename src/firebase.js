import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiyj4Y9CueDoiHvdHMZk3VJiHsvo0YAe4",
  authDomain: "instagram-clone-66e48.firebaseapp.com",
  databaseURL: "https://instagram-clone-66e48.firebaseio.com",
  projectId: "instagram-clone-66e48",
  storageBucket: "instagram-clone-66e48.appspot.com",
  messagingSenderId: "1026904115098",
  appId: "1:1026904115098:web:4161733fc53e3543935c23",
  measurementId: "G-70CTN9D8LC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
