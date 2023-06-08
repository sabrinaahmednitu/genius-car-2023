
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyCQ3-CLWGtuvWf7OUGhUWHZP8ZSQIcm1Mw',
  authDomain: 'genius-car-2023-185b4.firebaseapp.com',
  projectId: 'genius-car-2023-185b4',
  storageBucket: 'genius-car-2023-185b4.appspot.com',
  messagingSenderId: '729764963566',
  appId: '1:729764963566:web:645a002e296f788d0effff',
  measurementId: 'G-RJ78E6CJ7D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 

