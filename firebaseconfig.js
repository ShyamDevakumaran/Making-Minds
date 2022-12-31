
const firebaseConfig = {
  apiKey: "AIzaSyAIeRLpC7alBHLLA_8e0S8XawECinm9DmA",
  authDomain: "makingminds0.firebaseapp.com",
  projectId: "makingminds0",
  storageBucket: "makingminds0.appspot.com",
  messagingSenderId: "273609602932",
  appId: "1:273609602932:web:d00f9b578db7103d62de21"
};

   
firebase.initializeApp(firebaseConfig);
firebase.analytics();
let db = firebase.firestore();