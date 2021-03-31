import { ReactNode } from "react";

type Item = {
  content: string | ReactNode;
  hoverContent?: string | ReactNode;
};
type Items = Item[];

export function Gallery({ items }: { items: Items }) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: 150,
        gap: 20,
      }}
    >
      {items.map(({ content, hoverContent }, i) => (
        <div
          className="flex text-left gap-1 justify-end flex-col cursor-pointer"
          style={{
            backgroundColor: "#4b6f57",
            color: "#fff",
            borderRadius: 8,
            padding: 20,
          }}
          key={i}
        >
          {content || (
            <>
              <p>Graham AC Bell</p>
              <address>McGill University, Canada</address>)
            </>
          )}
        </div>
      ))}
    </div>
  );
}
