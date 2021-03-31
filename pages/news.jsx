import Head from "next/head";
import { Header, Footer, TaggedContent } from "../components";

export default function Publications() {
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
          tagTitle="Tags"
          contents={[
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: [
                "Asteromonadaceae",
                "Characiochloridaceae",
                "Characiosiphonaceae",
                "Chlamydomonadaceae",
                "Spondylomoraceae",
              ],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
