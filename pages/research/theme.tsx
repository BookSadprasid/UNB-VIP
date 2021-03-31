import Head from "next/head";
import { ReactNode } from "react";
import { Header, Footer, Gallery } from "../../components";

export default function Team() {
  return (
    <>
      <Head>
        <title>Research Theme | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          {
            name: "Research Resources",
            href: "/research/resources",
          },
          {
            name: "Research Tools",
            href: "/research/tools",
          },
        ]}
      >
        <h1>
          Research
          <br />
          Themes
        </h1>
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
