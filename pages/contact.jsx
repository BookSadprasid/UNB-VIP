import Head from "next/head";
import { Header, Footer } from "../components";
import contactStyles from "../styles/Contact.module.scss";
import styles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Volvocales Information Project</title>
      </Head>

      <Header
        links={[
          { name: "About Volvocales", href: "/about" },
          { name: "Volvocales Wikipedia", href: "/wiki" },
        ]}
      >
        <h1>Contact</h1>
      </Header>
      <main className={styles.main}>
        <div className={contactStyles.container}>
          <address>
            Aurora Mihaela Nedelcu - VIP Coordinator <br />
            University of New Brunswick <br />
            Biology Department, PO Box 1400 Fredericton, <br />
            New Brunswick, Canada E3B5A3 anedelcu@unb.ca <br />
            http://www.unbf.ca/vip/amnedelcu/
          </address>

          <h3>How to contribute</h3>
          <p>
            How to contribute We count on the involvement of the Volvocales
            community to make this wiki a powerful and comprehensive database to
            be used by both researchers and teachers as well as the general
            public. If you would like to contribute to this wiki, please send an
            e-mail to anedelcu@unb.ca to receive the password that will allow
            you to directly add and/or change information (browsing does not
            require a Log in). A quick guide on how to edit the wiki is provided
            in the Help section. Your contribution can be referenced on the page
            you contributed to. You can also register to receive e-mails when
            new information is added to the wiki.
          </p>

          <a href="#" className="button">
            Contribute
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
