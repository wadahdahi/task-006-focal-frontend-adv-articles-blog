import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fetchAllArticles } from "../store/slices/articlesSlice";
import RecentArticles from "../components/RecentArticles";
import AllArticles from "../components/AllArticles";
import ArticleContent from "../content/ArticleContent";
import NewsLetterSection from "../components/NewsLetterSection";

const BlogPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articleId } = useParams<{ articleId: string }>();
  const { articles, status } = useSelector(
    (state: RootState) => state.articles
  );

  // GETTING ALL ARTICLES
  useEffect(() => {
    if (!articles.length && status === "idle") {
      dispatch(fetchAllArticles());
    }
  }, [articles.length, status, dispatch]);

  // SELECTED ARTICLE
  const selectedArticle = useMemo(() => {
    if (!articleId || !articles.length) return null;
    return articles.find((a) => a.id.toString() === articleId) ?? null;
  }, [articleId, articles]);

  const getTitleText = (title: string | { text: string; style: string }) =>
    typeof title === "string" ? title : title.text;

  return (
    <div className="">
      {/* LEFT COLUMN */}
      <section className="flex flex-col-reverse lg:flex-row gap-6 w-full p-8 xl:p-28 bg-white dark:bg-[#090D1F] dark:text-white">
        <div className="w-full lg:w-1/3 h-full flex flex-col gap-6">
          <RecentArticles isVertical />
          <AllArticles isVertical />
        </div>

        {/* SECOND COLUMN: SELECTED ARTICLE */}
        <div className="w-full lg:w-2/3">
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Failed to load articles.</div>}
          {status === "succeeded" && selectedArticle && (
            <div className="article-card p-0 dark:bg-[#090D1F] dark:text-white">
              <p className="block text-sm text-[#6941C6] font-semibold capitalize mb-8">
                {getTitleText(selectedArticle.publishedAt)}
              </p>
              <h2 className="text-[36px] text-bold text-[#1A1A1A] dark:text-[#ffffff] lg:w-4/5 leading-8 font-bold mb-8">
                {getTitleText(selectedArticle.title)}
              </h2>
              {selectedArticle.imageUrl && (
                <img
                  src={selectedArticle.imageUrl}
                  alt={getTitleText(selectedArticle.title)}
                  className="w-full h-auto mb-4 object-cover"
                />
              )}

              {Array.isArray(selectedArticle.content) && (
                <ArticleContent blocks={selectedArticle.content} />
              )}
            </div>
          )}

          {status === "succeeded" && !selectedArticle && (
            <div className="text-gray-500 dark:text-[#c4d0c0]">
              CHOOSE AN ARTICLE TO READ
            </div>
          )}
        </div>
      </section>
      <NewsLetterSection />
    </div>
  );
};

export default BlogPage;
