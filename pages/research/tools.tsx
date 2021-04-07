import Head from "next/head";
import { Header, Footer, Gallery } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const entries = await Contentful.getResearchTools();
  return {
    props: {
      entries,
    },
  };
}

export default function Tools({ entries }) {
  return (
    <>
      <Head>
        <title>Research Tools | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Research Themes", href: "/research/theme" },
          { name: "Research Resources", href: "/research/resources" },
        ]}
      >
        <h1>
          Research
          <br />
          Tools
        </h1>
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
