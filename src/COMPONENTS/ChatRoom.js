import { useState, useRef } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatMessage from "./ChatMessage";

export default function ChatRoom() {
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const auth = firebase.auth();
  const [formValue, setFormValue] = useState("");
  const [messages] = useCollectionData(query, { idField: "id" });
  const scrollBottom = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-4">
      {messages &&
        messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={scrollBottom}></span>
      <form className="sticky left-0 bottom-0 w-full flex">
        <input
          placeholder="Write a message..."
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          className="w-4/5 px-2 h-12 text-lg focus:outline-none text-gray-600 font-semibold"
        />
        <button
          type="submit"
          disabled={!formValue}
          onClick={sendMessage}
          className="text-center bg-green-600 w-1/5 font-semibold text-xl"
        >
          Send
        </button>
      </form>
    </main>
  );
}
