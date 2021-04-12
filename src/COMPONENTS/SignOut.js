import firebase from "firebase/app";
import "firebase/auth";

export default function SignOut() {
  const auth = firebase.auth();
  return (
    <div>
      {auth.currentUser && (
        <button
          className="text-2xl font-semibold bg-green-700 h-12 px-4 text-white hover:bg-green-600 hover:text-green-900 transition-all duration-300"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      )}
    </div>
  );
}
