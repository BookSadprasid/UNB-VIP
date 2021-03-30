import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../styles/Home.module.scss";
import publicationStyles from "../styles/Publications.module.scss";
import Link from "next/link";

export default function Outreach() {
  return (
    <>
      <Head>
        <title>Outreach | Volvocales Information Project</title>
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
        <h1>Outreach</h1>
      </Header>
      <main className={styles.main}>
        <div className={publicationStyles.container}>
          {/* Tags */}
          <aside className={publicationStyles.families}>
            <p>
              <b>Families:</b>
            </p>
            <ul>
              <li>Asteromonadaceae</li>
              <li>Characiochloridaceae</li>
              <li>Characiosiphonaceae</li>
              <li>Chlamydomonadaceae</li>
              <li>Chlorochytriaceae</li>
              <li>Dunaliellaceae</li>
              <li>Goniaceae</li>
              <li>Haematococcaceae</li>
              <li>Phacotaceae</li>
              <li>Spondylomoraceae</li>
              <li>Tetrabaenaceae</li>
              <li>Volvocaceae</li>
            </ul>
          </aside>

          {/* Publications */}
          <section className={publicationStyles.publications}>
            <h2>Species Name</h2>
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
