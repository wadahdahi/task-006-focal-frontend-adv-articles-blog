import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import {
  fetchAllArticles,
  setCurrentPage,
} from "../store/slices/articlesSlice";
import type { Article } from "../interfaces/interfaces";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

export interface AllArticlesProps {
  isVertical?: boolean;
}

const AllArticles: React.FC<AllArticlesProps> = ({ isVertical }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, currentPage, articlesPerPage, totalPages, status } =
    useSelector((state: RootState) => state.articles);

  // GETTING ALL ARTICLES ON PAGE MOUNT
  useEffect(() => {
    dispatch(fetchAllArticles());
  }, [dispatch]);

  // ARTICLES COUNT FOR CURRENT PAGE
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Failed to load articles.</div>;

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">All Articles</h2>
      <div
        className={
          isVertical
            ? "flex flex-col gap-4 mb-4"
            : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4"
        }
      >
        {/* GRID: 2 ROWS x 3 COLUMNS - 6 ARTICLES */}
        {currentArticles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default AllArticles;
