import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAtfMDRX01ajn3Fjq0-CG6C_l2uExTAfKU",
  authDomain: "expensify-8238b.firebaseapp.com",
  databaseURL: "https://expensify-8238b.firebaseio.com",
  projectId: "expensify-8238b",
  storageBucket: "expensify-8238b.appspot.com",
  messagingSenderId: "1025226581499"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Pesho'
});