import react from "react";
import styles from "../styles/Home.module.css";
import { signIn, signOut, getSession } from "next-auth/react";

const SignIn = (props) => {
  if (props.content === "auth") {
    return (
      <button className={styles.button} onClick={() => signOut()}>
        Sign Out
      </button>
    );
  } else {
    return (
      <button className={styles.button} onClick={() => signIn()}>
        Sign In
      </button>
    );
  }
};

export default SignIn;
