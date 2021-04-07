import { Contentful } from "@lib";
import { renderRichText } from "@utils";
import Head from "next/head";
import { Header, Footer, Quote } from "../../components";

export async function getServerSideProps() {
  const props = await Contentful.getResearchPage();
  return { props };
}

export default function Research({ title, quote, quoteAuthor, content }) {
  return (
    <>
      <Head>
        <title>Research | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          {
            name: "Research Themes",
            href: "/research/theme",
          },
          {
            name: "Research Resources",
            href: "/research/resources",
          },
          // TODO: This does not go anywhere
          {
            name: "Research Tool",
            href: "/research/tool",
          },
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
