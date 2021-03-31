import Link from "next/link";
import styles from "../styles/nav.module.scss";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a href="">
          <img src="/logo_vip.svg" alt="logo" />
        </a>
      </Link>
      <div className={styles.nav_menu}>
        <div className="menu" style={{ minWidth: 150 }}>
          <Link href="/about">
            <a>About Volvocales</a>
          </Link>
          <ul
            className="absolute list-arrow text-left flex flex-col gap-2 pt-1"
            style={{ paddingLeft: 20 }}
          >
            <li>
              <Link href="/why">
                <a>Why Volvocales</a>
              </Link>
            </li>
            <li>
              <Link href="/wiki">
                <a>Volvocales Wikipedia</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Photo Gallery</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu" style={{ minWidth: 150 }}>
          <Link href="/about">
            <a>About Volvocales</a>
          </Link>
          <ul
            className="absolute list-arrow text-left flex flex-col gap-2 pt-1"
            style={{ paddingLeft: 20 }}
          >
            <li>
              <Link href="/research/theme">
                <a>Research Theme</a>
              </Link>
            </li>
            <li>
              <Link href="/research/resources">
                <a>Research Resources</a>
              </Link>
            </li>
            <li>
              <Link href="/research/tools">
                <a>Research Tools</a>
              </Link>
            </li>
          </ul>
        </div>

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

        <Link href="/contact">
          <a>Contacts</a>
        </Link>
      </div>
    </nav>
  );
}
