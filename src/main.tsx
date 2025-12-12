import React from "react";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.tsx";
import NewsletterPage from "./pages/NewsletterPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "newsletter-page", element: <NewsletterPage /> },
      { path: "blog/:articleId", element: <BlogPage /> },
      { path: "about-page", element: <AboutPage /> },
      { path: "projects-page", element: <ProjectsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
