import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import ArticleCard from "./ArticleCard";
import type { AllArticlesProps } from "./AllArticles";

const RecentArticles: React.FC<AllArticlesProps> = ({ isVertical }) => {
  const articles = useSelector((state: RootState) => state.articles.articles);

  const recentArticles = [...articles]
    .filter((a) => a.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime()
    )
    .slice(0, 4);

  return (
    <section className="flex flex-col mb-8 w-full h-full p-0">
      <h2 className="text-[24px] font-semibold mb-8 text-[#1A1A1A] dark:text-white">
        Recent blog posts
      </h2>

      <div
        className={
          isVertical
            ? "flex flex-col gap-8 w-full h-full"
            : "flex flex-col gap-8 w-full h-full"
        }
      >
        {isVertical ? (
          // VERTICAL VIEW
          recentArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              className="flex flex-col w-full h-full"
            />
          ))
        ) : (
          // HOMEPAGE RENDER
          <>
            {/* ARTICLE 1 */}
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8">
              {recentArticles[3] && (
                <ArticleCard
                  article={recentArticles[3]}
                  className="flex flex-col w-full h-full justify-between"
                />
              )}
              {/* ARTICLE 2 + 3 */}
              <div className="flex flex-col w-full h-full gap-8 justify-between">
                {[1, 2].map((i) =>
                  recentArticles[i] ? (
                    <ArticleCard
                      key={recentArticles[i].id}
                      article={recentArticles[i]}
                      className="flex flex-col md:flex-row xl:flex-row w-full h-fit md:gap-6 items-start"
                      isImageColumn
                    />
                  ) : null
                )}
              </div>
            </div>
            {/* ARTICLE 4 */}
            {recentArticles[0] && (
              <ArticleCard
                article={recentArticles[0]}
                className="flex flex-col w-full h-full xl:flex-row justify-between"
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default RecentArticles;
