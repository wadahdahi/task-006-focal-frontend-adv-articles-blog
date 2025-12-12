import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fetchAllArticles } from "../store/slices/articlesSlice";
import ArticleCard from "./ArticleCard";

const NewsletterArticles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, status } = useSelector(
    (state: RootState) => state.articles
  );

  useEffect(() => {
    if (!articles.length) {
      dispatch(fetchAllArticles());
    }
  }, [dispatch, articles.length]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Failed to load articles.</div>;

  const firstThree = articles.slice(0, 3);

  return (
    <section className="flex flex-col gap-8 w-full h-full">
      <h2 className="block text-[24px] font-semibold text-[#1A1A1A] dark:text-[#ffffff] ">
        All blog posts
      </h2>

      <div
        className="
      flex flex-col gap-6 w-full h-full
      sm:grid sm:grid-cols-2 sm:auto-rows-fr
      md:flex md:flex-row
    "
      >
        {firstThree.map((article, i) => (
          <div
            key={article.id}
            className={`
          ${i === 2 ? "sm:col-span-2 md:col-span-1" : ""}
        `}
          >
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsletterArticles;
