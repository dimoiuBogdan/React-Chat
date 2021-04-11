import firebase from "firebase/app";
import "firebase/auth";

export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const auth = firebase.auth();
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="profile" />
      <p>{text}</p>
    </div>
  );
}
