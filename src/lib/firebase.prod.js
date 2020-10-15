import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBaNg4vTnZj8h5FtsduEmgpD_HlEztFtAk",
    authDomain: "netflix-a18c2.firebaseapp.com",
    databaseURL: "https://netflix-a18c2.firebaseio.com",
    projectId: "netflix-a18c2",
    storageBucket: "netflix-a18c2.appspot.com",
    messagingSenderId: "713556399607",
    appId: "1:713556399607:web:3e0372761c9c7d15ad4af2"
};

const firebase = Firebase.initializeApp(config);

export { firebase };