import Head from "next/head";
import { Header, Footer, TaggedContent } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const publications = await Contentful.getPublicationPage();
  return {
    props: {
      publications,
    },
  };
}

export default function Publications({ publications }) {
  return (
    <>
      <Head>
        <title>Publications | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>Publications</h1>
      </Header>
      <main>
        <TaggedContent
          contentTitle=""
          tagTitle="Genus"
          contents={publications.map(({ tags, ...other }) => ({
            ...other,
            tags: tags.map(({ name }) => name),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}
