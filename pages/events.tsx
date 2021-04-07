import Head from "next/head";
import { Header, Footer, TaggedContent } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const events = await Contentful.getEventPage();
  return {
    props: {
      events,
    },
  };
}

export default function Events({ events }) {
  return (
    <>
      <Head>
        <title>Events | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>Events</h1>
      </Header>
      <main>
        <TaggedContent
          tagTitle="Filter by:"
          contentTitle="Conference"
          contents={events.map(({ tags, ...other }) => ({
            ...other,
            tags: tags.map(({ name }) => name),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}
