import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./COMPONENTS/ChatRoom";
import SignIn from "./COMPONENTS/SignIn";
import SignOut from "./COMPONENTS/SignOut";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBsVExMMzxALkCuqsNRybVJJUKwQUbsm_4",
    authDomain: "react-chat-wfirebase.firebaseapp.com",
    projectId: "react-chat-wfirebase",
    storageBucket: "react-chat-wfirebase.appspot.com",
    messagingSenderId: "309406948824",
    appId: "1:309406948824:web:f02287123758bf9af226ad",
    measurementId: "G-BYPJ6KJLHE",
  });
}

const auth = firebase.auth();

export default function App() {
  // If logged in, user is an object, else, user is null
  const [user] = useAuthState(auth);

  return (
    <div className="w-full h-screen py-8 bg-gray-700 text-white">
      <div className="mx-auto max-w-screen-md max-h-full overflow-y-scroll bg-gray-600 rounded-md shadow-lg overflow-hidden relative">
        <header className="flex sticky top-0 items-center justify-between bg-green-600">
          <h1 className="text-3xl font-semibold pl-4">React-Chat-App</h1>
          <SignOut />
        </header>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </div>
    </div>
  );
}
