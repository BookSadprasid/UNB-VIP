import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volvocales Information Project</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <blockquote className={styles.blockquote}>
          {/* TODO: Automatically add quotes when using blockquote */}
          <p>
            "Few groups of organisms hold such a fascination for evolutionary
            biologists as the Volvocales. It is almost as if these algae were
            designed to exemplify the process of evolution."
          </p>
          <footer>- (Bell 1985)</footer>
        </blockquote>
        <p className={styles.p}>
          This project is designed as a common effort among scientists with
          interests in Volvocales who wish to share information, data, images,
          publications. The site provides information about new publications,
          research themes/projects, labs, databases, and other research tools of
          interest to the Volvocales community.{" "}
        </p>
        <div className={styles.splitSection}>
          <div className={styles.pictures}>
            <img src="/volvox-small.png" alt="volvox" />
            <p>
              The Fifth International Volvox Conference will be held at the
              University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!
            </p>
          </div>
          <div className={styles.news}>
            <header>
              <h2>News</h2>
            </header>
            {/* TODO: Validate semantics */}
            <article>
              <p>2019</p>
              <p>
                The Fifth International Volvox Conference will be held at the
                University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!
              </p>
            </article>
            <article>
              <p>2018</p>
              <p>
                On the contribution of Mary Agard Pocock to developmental
                biology research of the genus Volvox L. Desnitskiy A.G., Sym
                S.D. & Durand P.M. Transactions of the Royal Society of South
                Africa; click here for an electronic reprint
              </p>
              <a href="/news" className="button mt-1">
                Read More
              </a>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
