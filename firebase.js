 // firebase.js
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';

   const firebaseConfig = {
    apiKey: "AIzaSyCTi83irgRaHDljplyKjf-p8UcYVXwqcdY",

    authDomain: "heysnu1.firebaseapp.com",
  
    projectId: "heysnu1",
  
    storageBucket: "heysnu1.firebasestorage.app",
  
    messagingSenderId: "880305695748",
  
    appId: "1:880305695748:web:1f958f1ec3a7badd5cd951"
  
   };

   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   export { auth };
