import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../styles/Home.module.scss";
import publicationStyles from "../styles/Publications.module.scss";
import Link from "next/link";

export default function Events() {
  return (
    <>
      <Head>
        <title>Events | Volvocales Information Project</title>
      </Head>

      <Header
        // TODO: These links currently don't exist
        links={[
          {
            name: "Why Volvocales",
            href: "/why",
          },
          {
            name: "Volvocales Wikipedia",
            href: "/wiki",
          },
        ]}
      >
        <h1>Events</h1>
      </Header>
      <main className={styles.main}>
        <div className={publicationStyles.container}>
          {/* Tags */}
          <aside className={publicationStyles.families}>
            <p>
              <b>Filter by:</b>
            </p>
            <ul>
              <li>Conference</li>
              <li>Workshops</li>
              <li>Archive</li>
            </ul>
          </aside>

          {/* Conferences */}
          <section className={publicationStyles.publications}>
            <h2>Conference</h2>
            <div>
              <article>
                <h3>
                  The Chlamydomonas genome reveals the evolution of key animal
                  and plant functions
                </h3>
                <p>
                  Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon,
                  Elizabeth H Harris, Steven J Karpowicz, George B Witman...
                </p>
                {/* TODO: Add publication links */}
                <Link href="#">
                  <a className="button">Read More</a>
                </Link>
              </article>
              <article>
                <h3>
                  The Chlamydomonas genome reveals the evolution of key animal
                  and plant functions
                </h3>
                <p>
                  Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon,
                  Elizabeth H Harris, Steven J Karpowicz, George B Witman...
                </p>
                {/* TODO: Add publication links */}
                <Link href="#">
                  <a className="button">Read More</a>
                </Link>
              </article>
              <article>
                <h3>
                  The Chlamydomonas genome reveals the evolution of key animal
                  and plant functions
                </h3>
                <p>
                  Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon,
                  Elizabeth H Harris, Steven J Karpowicz, George B Witman...
                </p>
                {/* TODO: Add publication links */}
                <Link href="#">
                  <a className="button">Read More</a>
                </Link>
              </article>
              <article>
                <h3>
                  The Chlamydomonas genome reveals the evolution of key animal
                  and plant functions
                </h3>
                <p>
                  Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon,
                  Elizabeth H Harris, Steven J Karpowicz, George B Witman...
                </p>
                {/* TODO: Add publication links */}
                <Link href="#">
                  <a className="button">Read More</a>
                </Link>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
