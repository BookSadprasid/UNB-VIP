import Head from "next/head";
import { Header, Footer } from "../components";
import styles from "../styles/Home.module.scss";
import whyStyles from "../styles/Why.module.scss";

export default function Why() {
  return (
    <>
      <Head>
        <title>Why | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "VOLVOCALES WIKIPEDIA", href: "#" },
          { name: "PHOTO GALLERY", href: "#" },
        ]}
      >
        <h1>Why Volvocales</h1>
      </Header>
      <main className={styles.main}>
        <blockquote className={styles.blockquote}>
          {/* TODO: Automatically add quotes when using blockquote */}
          <p>
            "In some colony like Volvox there once lay hidden the secret of the
            body and mind of man."
          </p>
          <footer>- (Huxley 1912)</footer>
        </blockquote>
        <p className={whyStyles.content}>
          (1) They comprise a group of closely related organisms that range in
          complexity from unicellular forms, undifferentiated colonies, to true
          multicellular individuals with completely differentiated germ and
          somatic cells.
        </p>
        <p className={whyStyles.content}>
          (2) They are of such recent origin (in geological time) that there is
          hope that its various members may still retain within their genomes
          traces of the genetic changes that permitted transitions from one
          level of organizational complexity to the next.
        </p>
        <p className={whyStyles.content}>
          (3) The transitions in complexity have occurred more than once, thus
          raising the hope that the genetic changes and selective factors
          required for these transitions may be analyzed.
        </p>
        <p className={whyStyles.content}>
          (4) Stable mutant forms of V. carteri with disrupted germ-soma
          separation have been isolated and can serve to elucidate the costs and
          benefits of germ-soma differentiation and the means of fitness
          reorganization.
        </p>
        <p className={whyStyles.content}>
          (5) Several social genes (regA, glsA) underlying germ-soma separation
          and fitness reorganization have been identified.
        </p>
        <p className={whyStyles.content}>
          (6) They have been studied in detail by cytologists, biochemists,
          developmental biologists, geneticists, and molecular biologists.
        </p>
        <p className={whyStyles.content}>
          (7) Their distribution, natural history, and ecology has been
          extensively studied.
        </p>
        <p className={whyStyles.content}>
          (8) They can easily be obtained from nature and maintained in the lab
          under realistic growing conditions that allow for an eco-physiological
          framework.
        </p>
        <p className={whyStyles.content}>
          (9) The facultative sexual cycle is well characterized.
        </p>
        <p className={whyStyles.content}>
          10) Perhaps most interesting is that, while representing a lineage of
          closely related species of increasing complexity, this diversification
          only went so far�the road to higher plants lay elsewhere.
        </p>
      </main>
      <Footer />
    </>
  );
}
