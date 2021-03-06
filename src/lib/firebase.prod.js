import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

// we need to somehow seed the database

// we need a config here

 const config = {
    apiKey: "AIzaSyCFriYErNGuTSdT-uRX-plHcmAiiRH5wBg",
    authDomain: "netflix-27b9d.firebaseapp.com",
    projectId: "netflix-27b9d",
    storageBucket: "netflix-27b9d.appspot.com",
    messagingSenderId: "67170964506",
    appId: "1:67170964506:web:98f12565bdbdf67208eda3"
};

 const firebase = Firebase.initializeApp(config);

 //seedDatabase(firebase)

 export { firebase }