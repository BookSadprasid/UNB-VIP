import Head from "next/head";
import { Header, Footer, TaggedContent } from "@components";
import { Contentful } from "@lib";

export async function getServerSideProps() {
  const photos = await Contentful.getPhotoGalleryPage();
  return {
    props: {
      photos,
    },
  };
}

export default function Gallery({ photos }) {
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
          tagTitle="Genus"
          contents={photos.map(({ tags, picture, ...other }) => ({
            ...other,
            pictureUrl: picture?.[0].src ?? undefined,
            tags: tags.map(({ name }) => name),
          }))}
        />
      </main>
      <Footer />
    </>
  );
}
