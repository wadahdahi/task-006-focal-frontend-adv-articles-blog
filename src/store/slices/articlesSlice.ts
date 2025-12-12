// src/store/slices/articlesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Article, ArticlesState } from "../../interfaces/interfaces";

// GETTING ONE ARTICLE
export const fetchArticle = createAsyncThunk(
  "articles/fetchArticle",
  async (filename: string) => {
    const res = await fetch(`/articles-json/${filename}`);
    if (!res.ok) throw new Error("Failed to fetch article");
    const data: Article = await res.json();
    return data;
  }
);

// GETTING ALL ARTICLES ONCE
export const fetchAllArticles = createAsyncThunk(
  "articles/fetchAllArticles",
  async () => {
    const totalArticles = 20;
    const promises = Array.from({ length: totalArticles }, (_, i) => {
      const indexStr = (i + 1).toString().padStart(4, "0");
      return fetch(`/articles-json/article-${indexStr}.json`).then((res) => {
        if (!res.ok)
          throw new Error(`Failed to fetch article-${indexStr}.json`);
        return res.json();
      });
    });
    const articles = await Promise.all(promises);
    return articles as Article[];
  }
);

const initialState: ArticlesState = {
  articles: [],
  currentPage: 1,
  articlesPerPage: 6,
  totalPages: 0,
  status: "idle",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllArticles.fulfilled, (state, action) => {
        state.articles = action.payload.sort((a, b) => a.id - b.id);
        state.totalPages = Math.ceil(
          action.payload.length / state.articlesPerPage
        );
        state.status = "succeeded";
      })
      .addCase(fetchAllArticles.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCurrentPage } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
export default articlesSlice.reducer;
