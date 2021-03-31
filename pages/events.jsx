import Head from "next/head";
import { Header, Footer, TaggedContent } from "../components";

export default function Events() {
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
          contents={[
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
            {
              title:
                "The Chlamydomonas genome reveals the evolution of key animal and plant functions",
              description:
                "Sabeeha S Merchant, Simon E Prochnik, Olivier Vallon, Elizabeth H Harris, Steven J Karpowicz, George B Witman...",
              linkUrl: "#",
              tags: ["Conference", "Workshops", "Archive"],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
