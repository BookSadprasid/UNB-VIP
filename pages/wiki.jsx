import Head from "next/head";
import Link from "next/link";
import { Header, Footer } from "../components";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>Wiki | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "Why Volvocales", href: "/why" },
          { name: "Photo Gallery", href: "/gallery" },
        ]}
      >
        <h1>
          Volvocales <br /> Wikipedia
        </h1>
      </Header>
      <main>
        <h3>Organization:</h3>
        <p className="mt-2 w-2/3">
          The main section of this wiki contains a list of volvocalean species
          (click on Volvocales in the Wiki Side Bar) with information and links
          to sites pertaining to various aspects of that species (images,
          systematics, ecology, life-history, sequences, growth conditions,
          availability, publications). Other sections are indicated in the Side
          Bar.
        </p>
        <Link href="http://volvocales.pbworks.com/w/page/7566036/Volvocales">
          <a className="button mt-2 mb-2">Go to Volvocales Wikipedia</a>
        </Link>
        <h3 className="mt-2">How to contribute:</h3>
        <p className="mt-2 w-2/3">
          We count on the involvement of the Volvocales community to make this
          wiki a powerful and comprehensive database to be used by both
          researchers and teachers as well as the general public. If you would
          like to contribute to this wiki, please send an e-mail to
          anedelcu@unb.ca to receive the password that will allow you to
          directly add and/or change information (browsing does not require a
          Log in). A quick guide on how to edit the wiki is provided in the Help
          section. Your contribution can be referenced on the page you
          contributed to. You can also register to receive e-mails when new
          information is added to the wiki.
        </p>
        <Link href="#">
          <a className="button mt-2">Contribute</a>
        </Link>
      </main>
      <Footer />
    </>
  );
}
