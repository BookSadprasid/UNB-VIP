import Link from "next/link";

type Tag = string;
type Content = {
  title?: string;
  pictureUrl?: string;
  description?: string;
  linkUrl?: string;
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
  const tags = [...new Set(contents.flatMap((content) => content.tags))];

  return (
    <div
      className="grid text-left"
      style={{ gridTemplateColumns: "max-content 1fr", gap: 50 }}
    >
      {/* Tags */}
      <aside>
        <p>
          <b>{tagTitle || "Families:"}</b>
        </p>
        <ul className="mt-1">
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </aside>

      {/* Contents */}
      <section>
        <h2
          className="mb-2"
          style={{
            color: "var(--green)",
            fontSize: 36,
          }}
        >
          {contentTitle || "Species Name"}
        </h2>
        <div className="grid grid-cols-2" style={{ gap: 50 }}>
          {contents.map(({ title, pictureUrl, description, linkUrl }) => (
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
              {linkUrl && (
                <Link href={linkUrl}>
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
