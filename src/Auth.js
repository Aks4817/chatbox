import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase-config.js";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({setIsAuth}) => {
  const signInWithGoogle = async () => {
    // console.log("khi")
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>Sign In with google</p>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
};
