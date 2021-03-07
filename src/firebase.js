import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyJRCfpREdcFk1yGiXMtoHnZQ1gtVExzg",
    authDomain: "drive-clone-74055.firebaseapp.com",
    projectId: "drive-clone-74055",
    storageBucket: "drive-clone-74055.appspot.com",
    messagingSenderId: "94565304518",
    appId: "1:94565304518:web:bb44b2cc44f801785d6fc7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export {auth, provider, db, storage}