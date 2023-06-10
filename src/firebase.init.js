
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey:process.env.API_KEY_api_Key,
  authDomain:process.env.API_KEY_auth_Domain,
  projectId:process.env.API_KEY_project_Id,
  storageBucket:process.env.API_KEY_storage_Bucket,
  messagingSenderId:process.env.API_KEY_messaging_Sender_Id,
  appId:process.env.API_KEY_app_Id,
  measurementId:process.env.API_KEY_measurement_Id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 

