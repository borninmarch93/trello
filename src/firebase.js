import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwis_CYhYmGN-DJ75Q7u2wYDW_pY3I5-k",
  authDomain: "trello-task-manager-9812e.firebaseapp.com",
  projectId: "trello-task-manager-9812e",
  storageBucket: "trello-task-manager-9812e.appspot.com",
  messagingSenderId: "695771748145",
  appId: "1:695771748145:web:1ce2be856bfe4b62478210",
  measurementId: "G-F8XZK2VKZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);