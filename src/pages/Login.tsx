import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/index";

import google from "../assets/images/Other-Pay-Method.png";

const Login = () => {
  // use navigation for navigating to home page
  const navigation = useNavigate();

  //   use GoogleAUthProvider that is a default function from firebase
  const googleProvider = new GoogleAuthProvider();

  //   Google SIgn IN function
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      console.log("result", res);

      // on successful login, navigating to home screen
      navigation("/home", { state: { displayName: user.email } });
    } catch (err) {
      console.error(err);
      alert("Sorry could not login");
    }
  };

  return (
    <div
      onClick={signInWithGoogle}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "40px",
        borderRadius: "5px",
        backgroundColor: "#F0F0F0",
        cursor: "pointer",
      }}
    >
      <img
        src={google}
        className=""
        style={{
          width: "30px",
          height: "30px",
          marginRight: "10px",
        }}
        alt="google"
      />
      <h1
        style={{
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Login with Google
      </h1>
    </div>
  );
};

export default Login;
