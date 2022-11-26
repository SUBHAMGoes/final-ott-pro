import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import  'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVLWsSvM08PRq1OB8QQ3ch7u6691-sAfY",
    authDomain: "ott-rpt-prot.firebaseapp.com",
    projectId: "ott-rpt-prot",
    storageBucket: "ott-rpt-prot.appspot.com",
    messagingSenderId: "895389867987",
    appId: "1:895389867987:web:fd6461d3fef045e5e45926"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;