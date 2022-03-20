import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import CardContainer from "../components/CardContainer";
import styles from "../styles/Home.module.css";
import getToken from "../pages/api/get-token-example";
import SignIn from "../components/SignIn";
import AdminCheck from "../components/AdminCheck";
import react from "react";

export default function Home() {
  const { data: session } = useSession();
  let isAdmin = false;

  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>🍌 Banana Stand</title>
          <meta
            name="🍌 Banana Stand"
            content="There's always money in the banana stand"
          />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the Banana Stand</h1>
          <p className={styles.description}>Signed in as {session.user.name}</p>
          {(isAdmin = <AdminCheck email={session.user.email} />)}
          <CardContainer content="auth" admin={isAdmin} />
          <SignIn content="auth" />
        </main>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>🍌 Banana Stand</title>
        <meta
          name="🍌 Banana Stand"
          content="There's always money in the banana stand"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Banana Stand</h1>
        <p className={styles.description}>Where would you like to go next?</p>
        <CardContainer content="noAuth" />
        <SignIn content="noAuth" />
      </main>
    </div>
  );
}
