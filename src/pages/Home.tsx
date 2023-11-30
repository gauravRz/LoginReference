import { signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/index";

const Home = () => {
  // use navigation for navigating to home page
  const navigation = useNavigate();

  const displayName = useLocation().state?.displayName;

  //   Logout function

  const handleLogout = () => {
    // import signOut which is a function from firebase

    signOut(auth)
      .then(() => {
        // navigateback to login
        navigation("/");
      })
      .catch((error) => {
        console.error("Error while signing out:", error);
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "600",
        }}
      >
        Hello, {displayName}
      </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
