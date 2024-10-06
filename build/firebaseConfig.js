// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBnA5VAidJ20mtaoikC4p0oJyq6Ji2h-qU",
    authDomain: "coding-squad-249f7.web.app",
    projectId: "coding-squad-249f7",
    storageBucket: "coding-squad-249f7.appspot.com",
    messagingSenderId: "385893863935",
    appId: "1:385893863935:web:e7b73f4deb14eef6d197ca"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();