import AllArticles from "../components/AllArticles";
import RecentArticles from "../components/RecentArticles";

const HomePage = () => {
  return (
    <div className="app-style container flex flex-col justify-start items-center max-w-[100vw] mx-auto p-8 xl:p-28">
      <div className="flex flex-col justify-between gap-2 text-black dark:text-white">
        <hr className="w-screen h-px border-0 bg-black/30 dark:bg-white" />
        <h1 className="block text-center text-[16vw] font-bold text-black dark:text-white">
          THE BLOG
        </h1>
        <hr className="w-screen h-px border-0 bg-black/30 dark:bg-white mb-12.5" />
      </div>
      <RecentArticles />
      <AllArticles />
    </div>
  );
};

export default HomePage;
