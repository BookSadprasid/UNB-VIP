import { ReactNode, useState } from "react";

type Item = {
  content: string | ReactNode;
  // TODO: Could we move this to the caller?
  modalContent?: string;
  popupLinks?: ModalProps["links"];
};
type Items = Item[];

type ModalProps = {
  content: string;
  links: {
    linkTitle: string;
    linkUrl: string;
  }[];
};

export function Gallery({ items }: { items: Items }) {
  const [modalState, setModalState] = useState<ModalProps | undefined>();

  function Modal({ content, links }: ModalProps) {
    return (
      <div className="absolute left-0 top-0 right-0 bottom-0 flex items-center justify-center">
        <div
          className="absolute left-0 top-0 right-0 bottom-0"
          style={{
            background: "rgba(0, 0, 0, 0.25)",
          }}
          onClick={() => setModalState(undefined)}
        ></div>
        <div className="p-4 z-10 bg-white " style={{ maxWidth: 850 }}>
          <p>{content}</p>
          <div className="mt-2 flex gap-1">
            {links.map(({ linkTitle, linkUrl }) => (
              <a key={linkTitle} href={linkUrl} className="button">
                {linkTitle}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: 150,
        gap: 20,
      }}
    >
      {items.map(({ content, modalContent, popupLinks }, i) => (
        <div
          className="flex text-left gap-1 justify-end flex-col cursor-pointer"
          style={{
            backgroundColor: "#4b6f57",
            color: "#fff",
            borderRadius: 8,
            padding: 20,
          }}
          key={i}
          onClick={() =>
            setModalState({
              content: modalContent,
              links: popupLinks,
            })
          }
        >
          {content || (
            <>
              <p>Graham AC Bell</p>
              <address>McGill University, Canada</address>)
            </>
          )}
        </div>
      ))}
      {modalState && (
        <Modal content={modalState.content} links={modalState.links} />
      )}
    </div>
  );
}
