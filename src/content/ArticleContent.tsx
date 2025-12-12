import React from "react";

type Block = {
  type: "paragraph" | "image";
  text?: string;
  src?: string;
  style?: string;
  content?: { text: string; style: string }[];
};

interface Props {
  blocks: Block[];
}

const ArticleContent: React.FC<Props> = ({ blocks }) => {
  return (
    <div className="w-full">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          const parts = Array.isArray(block.content)
            ? block.content
            : [{ text: block.text || "", style: block.style || "none" }];

          return (
            <p
              key={i}
              className="text-[#667085] dark:text-[#C0C5D0] mb-4 leading-6 font-normal whitespace-normal"
            >
              {parts.map((part, j) => {
                if (part.style === "bold") {
                  return (
                    <span key={j} className="font-bold">
                      {part.text}
                    </span>
                  );
                }

                if (part.style === "underline") {
                  return (
                    <span key={j} className="underline">
                      {part.text}
                    </span>
                  );
                }

                return <span key={j}>{part.text}</span>;
              })}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <img
              key={i}
              src={block.src}
              alt={`img-${i}`}
              className="w-full h-auto mb-4 rounded"
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default ArticleContent;
