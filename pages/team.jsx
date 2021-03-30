import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../styles/Home.module.scss";
import teamStyles from "../styles/Team.module.scss";

export default function Team() {
  return (
    <>
      <Head>
        <title>People & Labs | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          {
            name: "About Volvocales",
            href: "/about",
          },
          {
            name: "Volvocales Wikipedia",
            href: "/wiki",
          },
        ]}
      >
        <h1>People & Labs</h1>
      </Header>
      <main className={styles.main}>
        <div className={teamStyles.container}>
          <div>
            <p>Graham AC Bell</p>
            <address>McGill University, Canada</address>
          </div>
          <div>
            <p>Graham AC Bell</p>
            <address>McGill University, Canada</address>
          </div>
          <div>
            <p>Graham AC Bell</p>
            <address>McGill University, Canada</address>
          </div>
          <div>
            <p>Graham AC Bell</p>
            <address>McGill University, Canada</address>
          </div>
          <div>
            <p>Graham AC Bell</p>
            <address>McGill University, Canada</address>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
