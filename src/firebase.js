import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBwUwWaQM_wcNPqdx9L3V_HYmYSaCQ298I",
    authDomain: "wed-app-344114.firebaseapp.com",
    databaseURL: "https://wed-app-344114-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wed-app-344114",
    storageBucket: "wed-app-344114.appspot.com",
    messagingSenderId: "324045140473",
    appId: "1:324045140473:web:6845f4322e818fe50ccd28"
  };

  const app = initializeApp(firebaseConfig);

  export const weddAppRef = getDatabase(app);