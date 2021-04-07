import Head from "next/head";
import { Header, Footer, Quote } from "@components";
import styles from "../styles/Home.module.scss";
import { Contentful } from "@lib";
import { renderRichText } from "@utils";

export async function getServerSideProps() {
  const props = await Contentful.getHomePage();
  return { props };
}

export default function Home({ quote, quoteAuthor, content }) {
  return (
    <>
      <Head>
        <title>Volvocales Information Project</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <Quote quote={quote} quoteAuthor={quoteAuthor} />
        <div className={styles.richContent}>{renderRichText(content)}</div>
        <div className={styles.splitSection}>
          {/* TODO: Missing Contentful */}
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
