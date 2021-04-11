import firebase from "firebase/app";
import "firebase/auth";

export default function SignOut() {
  const auth = firebase.auth();
  return (
    <div>
      {auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )}
    </div>
  );
}
