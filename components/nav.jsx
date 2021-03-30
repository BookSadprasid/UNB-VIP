import Link from "next/link";
import styles from "../styles/nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a href="">
          <img src="/logo_vip.svg" alt="logo" />
        </a>
      </Link>
      <div className={styles.nav_menu}>
        <Link href="/about">
          <a>About Volvocales</a>
        </Link>

        <Link href="/research">
          <a>Research</a>
        </Link>

        <Link href="/publications">
          <a>Publication</a>
        </Link>

        <Link href="/events">
          <a>Events</a>
        </Link>

        <Link href="/team">
          <a>People & Labs</a>
        </Link>

        <Link href="/outreach">
          <a>Outreach</a>
        </Link>

        <Link href="contacts">
          <a>Contacts</a>
        </Link>
      </div>
    </nav>
  );
}
