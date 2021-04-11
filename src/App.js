import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./COMPONENTS/ChatRoom";
import SignIn from "./COMPONENTS/SignIn";
import SignOut from "./COMPONENTS/SignOut";

firebase.initializeApp({
  apiKey: "AIzaSyBsVExMMzxALkCuqsNRybVJJUKwQUbsm_4",
  authDomain: "react-chat-wfirebase.firebaseapp.com",
  projectId: "react-chat-wfirebase",
  storageBucket: "react-chat-wfirebase.appspot.com",
  messagingSenderId: "309406948824",
  appId: "1:309406948824:web:f02287123758bf9af226ad",
  measurementId: "G-BYPJ6KJLHE",
});

const auth = firebase.auth();

export default function App() {
  // If logged in, user is an object, else, user is null
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>React-Chat-App</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}
