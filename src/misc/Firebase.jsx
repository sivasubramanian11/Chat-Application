import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyANkd0ap2SFirk69CiusxDfGcf5FvqQFgU",
  authDomain: "chat-app-ee126.firebaseapp.com",
  databaseURL: "https://chat-app-ee126-default-rtdb.firebaseio.com",
  projectId: "chat-app-ee126",
  storageBucket: "chat-app-ee126.appspot.com",
  messagingSenderId: "673190184920",
  appId: "1:673190184920:web:ffae94885864a5967314ad"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage= app.storage();


