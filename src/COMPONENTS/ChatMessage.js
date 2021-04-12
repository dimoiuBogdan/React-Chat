import firebase from "firebase/app";
import "firebase/auth";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const auth = firebase.auth();
  const messageClass = uid === auth.currentUser.uid ? "received" : "received";

  return (
    <div className={`flex w-full items-center mb-4 ${messageClass}`}>
      <img
        src={photoURL}
        alt="profile"
        className="h-12 ml-3 border-2 border-green-500 rounded-full"
      />
      <p className="text-md bg-green-500 bg-opacity-50 px-3 py-1 rounded-2xl mx-4 font-semibold break-all">
        {text}
      </p>
    </div>
  );
}
