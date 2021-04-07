import Link from "next/link";
import { useState } from "react";

type Tag = string;
type Content = {
  title?: string;
  pictureUrl?: string;
  description?: string;
  link?: string;
  tags?: Tag[];
};
type Contents = Content[];

export function TaggedContent({
  contents,
  tagTitle,
  contentTitle,
}: {
  contents: Contents;
  tagTitle?: string;
  contentTitle?: string;
}) {
  const [filter, setFilter] = useState<string | null>(null);
  const tags = [...new Set(contents.flatMap((content) => content.tags))];

  // Bail if no contents
  if (!contents.length) return null;

  function toggleFilter(name: string) {
    setFilter((prevFilter) => (prevFilter === name ? null : name));
  }

  return (
    <div
      className="grid text-left"
      style={{ gridTemplateColumns: "minmax(200px, max-content) 1fr", gap: 50 }}
    >
      {/* Tags */}
      <aside>
        <p>
          <b>{tagTitle || "Families:"}</b>
        </p>
        <ul className="mt-1 p-0 list-none">
          {tags.map((tag) => (
            <li key={tag}>
              <button
                onClick={() => toggleFilter(tag)}
                className={filter === tag ? "text-green underline" : ""}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Contents */}
      <section>
        {contentTitle && (
          <h2
            className="mb-2"
            style={{
              color: "var(--green)",
              fontSize: 36,
            }}
          >
            {contentTitle}
          </h2>
        )}
        <div className="grid grid-cols-2" style={{ gap: 50 }}>
          {contents
            .filter(({ tags }) => (filter ? tags.includes(filter) : true))
            .map(({ title, pictureUrl, description, link }) => (
              <article className="flex flex-col gap-2" key={title}>
                {title && <h3 style={{ fontSize: 24 }}>{title}</h3>}
                {pictureUrl && (
                  <img
                    src={pictureUrl}
                    alt={title}
                    className="w-full object-cover mx-auto"
                    style={{ maxHeight: 400, maxWidth: 400 }}
                  />
                )}
                {description && <p>{description}</p>}
                {link && (
                  <Link href={link}>
                    <a className="button">Read More</a>
                  </Link>
                )}
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
