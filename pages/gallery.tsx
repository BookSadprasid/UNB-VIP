import Head from "next/head";
import { Header, Footer, TaggedContent } from "../components";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Photo Gallery | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>
          Photo
          <br />
          Gallery
        </h1>
      </Header>
      <main>
        <TaggedContent
          contentTitle="Species"
          contents={[
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
            {
              pictureUrl: "/volvox.png",
              description:
                "The Fifth International Volvox Conference will be held at the University of Tokyo Hongo campus, Japan, July 26-29, 2019!!!!",
              link: "#",
              tags: ["Asteromonadaceae", "Characiochloridaceae"],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
