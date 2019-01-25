import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize the firebase config
const config = {
  apiKey: 'AIzaSyBWXCjWGMMSvZQJ2_6CawW8O4qCxwdK3Cc',
  authDomain: 'vue-chat-7930f.firebaseapp.com',
  databaseURL: 'https://vue-chat-7930f.firebaseio.com',
  projectId: 'vue-chat-7930f',
  storageBucket: 'vue-chat-7930f.appspot.com',
  messagingSenderId: '754373884098'
};
const firebaseApp = firebase.initializeApp(config);
// Initialize Firebase
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
