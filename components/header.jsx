import Link from "next/link";
import styles from "../styles/header.module.scss";
import { Nav } from "./nav";

const defaultLinks = [
  {
    name: "Why Volvocales",
    href: "/why",
  },
  {
    name: "Photo Gallery",
    href: "#",
  },
  {
    name: "People & Labs",
    href: "#",
  },
];

export function Header({ children, links = defaultLinks }) {
  return (
    <header className={styles.header}>
      <Nav></Nav>

      <div className={styles.quickLinksBox}>
        {children}
        {links.map(({ name, href }) => (
          <Link href={href}>
            <a>
              <div className={styles.quickLinks}>
                <img src="./volvox.png" alt="volvox" />
                <div>{name}</div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
}
