import React, { useMemo } from "react";
import type { ArticleCardProps as ImportedProps } from "../interfaces/interfaces";
import { Col, Row } from "react-bootstrap";
import { getRandomColorPair } from "../utils/colors";
import type { ColorPair } from "../utils/colors";
import { useNavigate } from "react-router";

// TYPE DEFINITION FOR PROPS
interface Props extends ImportedProps {
  className?: string;
  isImageColumn?: boolean;
}

const ArticleCard: React.FC<Props> = ({
  article,
  className,
  isImageColumn,
}) => {
  // ROUTE NAVIGATION HANDLER FUNCTION FOR CLICKING ON CARD ARROWS
  const navigate = useNavigate();

  // MEMOIZED CATEGORY COLORS
  const categoryColors: Record<string, ColorPair> = useMemo(() => {
    const map: Record<string, ColorPair> = {};
    article.category?.forEach((cat) => {
      map[cat] = getRandomColorPair();
    });
    return map;
  }, [article.category]);

  // RENDERING CATEGORIES WITH COLORS
  const renderCategories = () => {
    return article.category?.map((cat, index) => {
      const color = categoryColors[cat] ?? {
        bg: "bg-gray-200",
        text: "text-gray-800",
      };
      return (
        <span
          key={index}
          className={`inline-block ${color.bg} ${color.text} text-xs px-2 py-1 rounded-full capitalize`}
        >
          {cat}
        </span>
      );
    });
  };

  // GET FIRST PARAGRAPH TEXT SAFELY
  const firstParagraphText = useMemo(() => {
    if (!article.content) return "";
    if (typeof article.content === "string")
      return article.content.slice(0, 100);
    const firstParagraph = article.content.find(
      (block) => block.type === "paragraph" && block.text
    );
    return firstParagraph?.text?.slice(0, 100) ?? "";
  }, [article.content]);

  const titleText =
    typeof article.title === "string"
      ? article.title
      : article.title?.text ?? "";

  // IMAGE COLUMN CARD
  if (isImageColumn) {
    return (
      <div
        className={`w-full h-full gap-8 bg-white dark:text-white dark:bg-[#090D1F] transition ${className}`}
      >
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={titleText}
            className="w-full h-full md:min-w-[320px] md:w-[40vw] object-cover"
          />
        )}

        <div className="flex flex-col w-full h-full pb-0 justify-between dark:text-white dark:bg-[#090D1F] hover:shadow-lg transition p-4">
          <p className="block text-sm text-[#6941C6] font-semibold capitalize">
            {article.author} -{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>

          <Row className="flex flex-row justify-between items-center">
            <Col>
              <h3 className="block font-bold text-[18px]">{titleText}</h3>
            </Col>
            <Col className="flex justify-end">
              <img
                alt=""
                src="/icons/arrow-01-dark-for-light.png"
                className="cursor-pointer dark:hidden"
                onClick={() => navigate(`/blog/${article.id}`)}
              />
              <img
                alt=""
                src="/icons/arrow-01-light-for-dark.png"
                className="cursor-pointer hidden dark:block"
                onClick={() => navigate(`/blog/${article.id}`)}
              />
            </Col>
          </Row>

          <p className="block w-full xl:h-18 text-[16px] text-sm text-[#66856b]">
            {firstParagraphText}...
          </p>

          <Row className="flex flex-wrap gap-1 font-medium">
            {renderCategories()}
          </Row>
        </div>
      </div>
    );
  }

  // DEFAULT CARD
  return (
    <Row
      className={`flex flex-col gap-8 h-full justify-between bg-white dark:text-white dark:bg-[#090D1F] hover:shadow-lg transition ${className}`}
    >
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={titleText}
          className="w-full h-full max-h-[468.667px] md:max-h-57 xl:min-h-57 xl:max-h-61.5 object-cover"
        />
      )}

      <div className="flex flex-col w-full h-full max-h-full justify-between">
        <Row>
          <p className="block text-sm text-[#6941C6] mb-2 font-semibold capitalize">
            {article.author} -{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </Row>

        <Row className="flex justify-between items-center">
          <Col>
            <h3 className="font-bold text-lg">{titleText}</h3>
          </Col>
          <Col className="flex justify-end">
            <img
              alt=""
              src="/icons/arrow-01-dark-for-light.png"
              className="cursor-pointer dark:hidden"
              onClick={() => navigate(`/blog/${article.id}`)}
            />
            <img
              alt=""
              src="/icons/arrow-01-light-for-dark.png"
              className="cursor-pointer hidden dark:block"
              onClick={() => navigate(`/blog/${article.id}`)}
            />
          </Col>
        </Row>

        <Row>
          <p className="block mt-2 text-sm">{firstParagraphText}...</p>
        </Row>

        <Row className="mb-2 flex flex-wrap gap-1 font-medium">
          {renderCategories()}
        </Row>
      </div>
    </Row>
  );
};

export default ArticleCard;
