export interface Article {
  id: number;
  title: string | { text: string; style: string };
  mainImage?: string;
  content:
    | string
    | Array<{
        type: "paragraph" | "image";
        text?: string;
        src?: string;
        style?: string;
      }>;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string[];
}

export interface ArticlesState {
  articles: Article[];
  currentPage: number;
  articlesPerPage: number;
  totalPages: number;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface ArticleCardProps {
  article: Article;
  className?: string;
  isImageColumn?: boolean;
}
