import Head from "next/head";
import { Header, Footer, TaggedContent } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const outreach = await Contentful.getOutreachPage();
  return {
    props: {
      outreach,
    },
  };
}

export default function Outreach({ outreach }) {
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
      <main>
        <TaggedContent
          contentTitle="Species Name"
          contents={outreach.map(({ tags, ...other }) => ({
            ...other,
            tags: tags.map(({ name }) => name),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}
