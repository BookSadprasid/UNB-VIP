import { Contentful } from "@lib";
import Head from "next/head";
import { Header, Footer, Quote } from "@components";
import { renderRichText } from "@utils";

export async function getServerSideProps() {
  const props = await Contentful.getWhyPage();
  return { props };
}

export default function Why({ title, quote, quoteAuthor, content }) {
  return (
    <>
      <Head>
        <title>Why | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "VOLVOCALES WIKIPEDIA", href: "#" },
          { name: "PHOTO GALLERY", href: "#" },
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
