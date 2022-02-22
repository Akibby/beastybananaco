import Head from "next/head";
import Image from "next/image";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import CardContainer from "../components/CardContainer";
import styles from "../styles/Home.module.css";
import getToken from "../pages/api/get-token-example";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>🍌 Banana Stand</title>
          <meta
            name="🍌 Banana Stand"
            content="There is always money in the banana stand"
          />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to the Banana Stand</h1>
          <p className={styles.description}>Signed in as {session.user.name}</p>
          {/* <button onClick={() => console.log(session.user)}>Token</button> */}
          <button onClick={() => signOut()}>Sign Out</button>
          <CardContainer content="auth" />
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
          content="There is always money in the banana stand"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Banana Stand</h1>
        <p className={styles.description}>Where would you like to go next?</p>
        <button onClick={() => signIn()}>Sign In</button>
        <CardContainer content="noAuth" />
      </main>
    </div>
  );
}
