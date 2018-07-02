/* eslint-disable */
import firebase from 'firebase'
import firestore from 'firebase/firestore'



var config = {
  apiKey: "AIzaSyAZDkzxcLSEg-UKpqBRN4Ho5_V3yqtoKVU",
  authDomain: "vuetalk-b51a0.firebaseapp.com",
  databaseURL: "https://vuetalk-b51a0.firebaseio.com",
  projectId: "vuetalk-b51a0",
  storageBucket: "vuetalk-b51a0.appspot.com",
  messagingSenderId: "960222338375"
};

const firbaseApp = firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firbaseApp.firestore();