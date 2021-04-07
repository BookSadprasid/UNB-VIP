import Head from "next/head";
import { Header, Footer, Gallery } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const entries = await Contentful.getResearchResources();
  return {
    props: {
      entries,
    },
  };
}

export default function Resources({ entries }) {
  return (
    <>
      <Head>
        <title>Research Resources | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Research Themes", href: "/research/theme" },
          { name: "Research Tools", href: "/research/tools" },
        ]}
      >
        <h1>
          Research
          <br />
          Resources
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
