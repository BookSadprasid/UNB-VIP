import Head from "next/head";
import { Header, Footer, Gallery } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const entries = await Contentful.getPeopleLabs();
  return {
    props: {
      entries,
    },
  };
}

export default function Team({ entries }) {
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
          items={entries.map(
            ({ title, subTitle, modalContent, popupLinks }) => ({
              content: (
                <>
                  <p
                    style={{
                      fontSize: 24,
                    }}
                  >
                    {title}
                  </p>
                  <address>{subTitle}</address>
                </>
              ),
              modalContent,
              popupLinks,
            })
          )}
        />
      </main>
      <Footer />
    </>
  );
}
