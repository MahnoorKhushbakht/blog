'use client'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/components/googleSignIn/config";

export default function SignInWithGoogleBtn() {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((data) => {
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
 className="bg-white hover:bg-red-500 hover:text-white text-red-500 font-bold py-2 px-4 rounded w-full text-center block"
    >
      Sign In with Google
    </button>
  );
}
