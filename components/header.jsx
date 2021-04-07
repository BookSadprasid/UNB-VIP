import Link from "next/link";
import styles from "../styles/header.module.scss";
import { Nav } from "./nav";

const defaultLinks = [
  { name: "Why Volvocales", href: "/why" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "People & Labs", href: "/team" },
];

export function Header({ children, links = defaultLinks }) {
  return (
    <header className={styles.header}>
      <Nav></Nav>

      <div
        className="flex flex-grow items-center justify-between gap-2 container"
        style={{ paddingTop: 120, paddingBottom: 40 }}
      >
        {children && <div className="uppercase self-end">{children}</div>}
        <div className="flex gap-1 w-full justify-center">
          {links.map(({ name, href }) => (
            <Link href={href} key={name}>
              <a>
                <div className={styles.quickLinks}>
                  <img src="/volvox.png" alt="volvox" />
                  <div>{name}</div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
