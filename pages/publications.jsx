import Head from "next/head";
import { Header, Footer, TaggedContent } from "../components";

export default function Publications() {
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
          contentTitle="Species Name"
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
