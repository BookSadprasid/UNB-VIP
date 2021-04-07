import Head from "next/head";
import { Header, Footer, TaggedContent } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const news = await Contentful.getNewsPage();
  return {
    props: { news },
  };
}

export default function News({ news }) {
  return (
    <>
      <Head>
        <title>News | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>News</h1>
      </Header>
      <main>
        <TaggedContent
          contentTitle="Articles"
          tagTitle="Filter by:"
          contents={news.map(({ tags, ...other }) => ({
            ...other,
            tags: tags.map(({ name }) => name),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}
