import Head from "next/head";
import { Header, Footer, Quote } from "@components";
import { Contentful } from "@lib";
import { renderRichText } from "@utils";

export async function getServerSideProps() {
  const props = await Contentful.getAboutPage();
  return { props };
}

export default function About({ title, quote, quoteAuthor, content }) {
  return (
    <>
      <Head>
        <title>About | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
          { name: "Photo Gallery", href: "/gallery" },
        ]}
      >
        <h1>{title}</h1>
      </Header>
      <main>
        <Quote {...{ quote, quoteAuthor }} />
        <div className="max-w-content">{renderRichText(content)}</div>
      </main>
      <Footer />
    </>
  );
}
