import Head from "next/head";
import { Header, Footer, Gallery } from "../components";

export default function Team() {
  return (
    <>
      <Head>
        <title>People & Labs | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "About Volvocales", href: "/about" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>People & Labs</h1>
      </Header>
      <main>
        <Gallery
          items={[
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
            {
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    Graham AC Bell
                  </p>
                  <address>McGill University, Canada</address>
                </>
              ),
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
